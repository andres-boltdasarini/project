import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let newmessageElement = React.createRef();
    let sendMessage = () => {
        let text = newmessageElement.current.value
        alert(text)
    }

    return (
        <div className={s.item + ' ' + s.dialog + ' ' + s.active}>

        <img src='https://avatars.mds.yandex.net/get-pdb/988157/3bf8f275-54de-4e09-a9d8-f82f23a1f6db/s1200'/>

        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
            <textarea ref = {newmessageElement}> </textarea>
            <button onClick={sendMessage}>send message</button>

</div>)
}

export default DialogItem;
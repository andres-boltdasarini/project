import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogElements =
        props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements =
        props.state.messages.map(m => <Message text={m.text}/>)
    let newpostElement = React.createRef()

    let adD = () => {
        let text = newpostElement.current.value
        props.adD(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newpostElement}/>
                <button onClick={adD}> add</button>
            </div>
        </div>
    )
}


export default Dialogs;
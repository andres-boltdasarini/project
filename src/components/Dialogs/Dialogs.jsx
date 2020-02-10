import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Dialogtext} from "./Dialogtext/Dialogtext";

const Dialogs = (props) => {

    let dialogElements =
        props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements =
        props.state.messages.map(m => <Message text={m.text}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <Dialogtext/>
            </div>
        </div>
    )
}


export default Dialogs;
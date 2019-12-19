import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>)
}
const Message = (props) => {
    return (
        <div className={s.dialog}> {props.text}</div>
    )
}
const Dialogs = (props) => {


    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Kolya'},
        {id: 4, name: 'Ilya'},
        {id: 5, name: 'Sanya'},
        {id: 6, name: 'Jeka'},
        {id: 7, name: 'Semen'},
    ]

    let messages = [
        {id: 1, text: 'try'},
        {id: 2, text: 't'},
        {id: 3, text: 'tr'},
        {id: 4, text: 'try'},
        {id: 5, text: 'try'},
    ]

    let dialogElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)


    let messagesElements = messages
        .map(m => <Message text={m.text}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}


export default Dialogs;
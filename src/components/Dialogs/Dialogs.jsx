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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dima" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Kolya" id="3"/>
                <DialogItem name="Ilya" id="4"/>
                <DialogItem name="Sanya" id="5"/>
                <DialogItem name="Jeka" id="6"/>
                <DialogItem name="Semen" id="7"/>
            </div>
            <div className={s.messages}>
                <Message text="hey"/>
                <Message text="ey"/>
                <Message text="lol"/>
            </div>
        </div>
    )
}


export default Dialogs;
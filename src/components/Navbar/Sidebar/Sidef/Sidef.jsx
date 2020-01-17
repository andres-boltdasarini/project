
import s from "../../../Dialogs/Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";



const SidefItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
            <img src='https://avatars.mds.yandex.net/get-pdb/163339/5110e93e-206b-473b-91fa-6cbfb1ebfb42/s1200' />
        </div>)
}


const Sidef = () => {


    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Kolya'},
        {id: 4, name: 'Ilya'},
        {id: 5, name: 'Sanya'},
        {id: 6, name: 'Jeka'},
        {id: 7, name: 'Semen'},
    ]



    let SidefElements = dialogs
        .map(d => <SidefItem name={d.name} id={d.id}/>)




    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {SidefElements}
            </div>

        </div>
    )
}


export default Sidef;
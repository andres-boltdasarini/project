
import s from "../../../Dialogs/Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const Heade = (props) => {


    return(
        <div>{props.name}</div>
    )
}



const SidefItem = (props) => {
    return (
        <div className={s.item + ' ' + s.dialog + ' ' + s.active}>

            <img src='https://avatars.mds.yandex.net/get-pdb/988157/3bf8f275-54de-4e09-a9d8-f82f23a1f6db/s1200'/>

            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>)
}

const Sidef = (props) => {


/*    let dialogs = [
        {id: 1, name: 'dima'},
        {id: 2, name: 'andrey'},
        {id: 3, name: 'kolya'},
        {id: 4, name: 'ilyya'},
        {id: 5, name: 'sanya'},
        {id: 6, name: 'jeka'},
        {id: 7, name: 'semeen'},
    ]*/



    let SidefElements = props.dialogs.map(d => <SidefItem name={d.name} id={d.id}/>)

    let logelement = props.dialogs.map(v => <Heade name={v.name}/> )




    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {SidefElements}

                {logelement}
            </div>

        </div>
    )
}


export default Sidef;
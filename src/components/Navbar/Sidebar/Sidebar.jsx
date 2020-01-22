import React from 'react';
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import Sidef from "./Sidef/Sidef";
import ProfileInfo from "../../Profile/ProfileInfo/ProfileInfo";


const Sidebar = (props) => {
   /* let dialogs = [
        {id: 1, name: 'dima'},
        {id: 2, name: 'andrey'},
        {id: 3, name: 'kolya'},
        {id: 4, name: 'ilyya'},
        {id: 5, name: 'sanya'},
        {id: 6, name: 'jeka'},
        {id: 7, name: 'semeeen'},
    ]*/
    return (
    <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/Friends" activeClassName={s.activeLink}><h2>Friends</h2></NavLink>
        </div>

        <div className={s.item}>
            <Sidef dialogs={props.dialogs}/>
        </div>
    </nav>
)
        }


        export default Sidebar;
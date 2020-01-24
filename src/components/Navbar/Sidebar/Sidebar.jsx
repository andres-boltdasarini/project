import React from 'react';
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import Sidef from "./Sidef/Sidef";


const Sidebar = (props) => {
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
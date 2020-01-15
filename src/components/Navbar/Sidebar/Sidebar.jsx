import React from 'react';
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";



const Sidebar = (props) => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/Friends" activeClassName={s.activeLink}><h2>Friends</h2></NavLink>
        </div>

        <div>
            <Friend/>
            <Friend/>
        </div>
    </nav>
}

const Friend = () => {
    return(
        <div className={s.item}>
            <img src='https://avatars.mds.yandex.net/get-pdb/988157/3bf8f275-54de-4e09-a9d8-f82f23a1f6db/s1200'/>
            sar
        </div>
    )
}



export default Sidebar;
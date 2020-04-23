import React from 'react';
import s from'./Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.pngkey.com/png/full/24-247134_devil-name-logo-png-check-out-devil-name.png' />

        <div className={s.loginBlock}>
                       { props.isAuth ? props.login
                           : <NavLink to={'/login'}>Login</NavLink> }
                    </div>
    </header>
}


export default Header;
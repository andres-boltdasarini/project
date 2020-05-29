import React from 'react';
import s from'./Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://yt3.ggpht.com/a/AATXAJwBTQ3-f_s99uATdqf6bcYcjl34vx2Lj9bYMA=s900-c-k-c0xffffffff-no-rj-mo' />

        <div className={s.loginBlock}>
                       { props.isAuth ? props.login
                           : <NavLink to={'/login'}>Login</NavLink> }
                    </div>
    </header>
}


export default Header;
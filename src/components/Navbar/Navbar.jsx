import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = (props) => {
 /* let dialogs = [
    {id: 1, name: 'dima'},
    {id: 2, name: 'andrey'},
    {id: 3, name: 'kolya'},
    {id: 4, name: 'ilyya'},
    {id: 5, name: 'sanya'},
    {id: 6, name: 'jeka'},
    {id: 7, name: 'semeeen'},
  ]*/
  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/dialogs"activeClassName={s.activeLink}>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/news"activeClassName={s.activeLink}>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/music"activeClassName={s.activeLink}>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/settings"activeClassName={s.activeLink}>Settings</NavLink>
    </div>
<div>
  <Sidebar dialogs={props.dialogs}/>

</div>
  </nav>
}

export default Navbar;
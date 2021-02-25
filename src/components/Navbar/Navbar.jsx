
import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';
import s from './Navbar.module.css';

const Navbar = (props) => {
  return <nav className={s.nav}>
    <ul className={s.nav__items}>
      <li className={s.nav__item}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></li>
      <li className={s.nav__item}><NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink></li>
      <li className={s.nav__item}><NavLink to="/news" activeClassName={s.activeLink}>News</NavLink></li>
      <li className={s.nav__item}><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></li>
      <li className={s.nav__item}><NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink></li>

      <li className={s.nav__item}><NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
        {/* <Friends friends={props.state.sidebar.friends} /> */}
      </li>
    </ul>
  </nav>
};

export default Navbar;
import React from 'react';
import NavBar from '../NavBar/NavBar';
import Profile from '../Profile/Profile';
import cls from './Menu.module.scss';

const Menu = () => {
  return (
    <div className={cls.menu}>
      <NavBar />
      <Profile />
    </div>
  );
};

export default Menu;

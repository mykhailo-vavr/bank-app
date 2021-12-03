import React from 'react';
import cls from './NavBarItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBarItem = ({ icon, text }) => {
  return (
    <li className={cls.item}>
      <a href="#" onClick={e => e.preventDefault()}>
        <FontAwesomeIcon icon={icon} />
        <span className={cls.span}>{text}</span>
      </a>
    </li>
  );
};

export default NavBarItem;

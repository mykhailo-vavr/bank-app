import React from 'react';
import cls from './NavBarItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useMatch } from 'react-router-dom';

const NavBarItem = ({ settings }) => {
  const match = useMatch(settings.to);
  return (
    <li className={`${cls.item} ${match ? cls.active : ''}`}>
      <Link to={settings.to}>
        <FontAwesomeIcon icon={settings.icon} />
        <span className={cls.span}>{settings.text}</span>
      </Link>
    </li>
  );
};

export default NavBarItem;

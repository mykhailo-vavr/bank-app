import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import cls from './Button.module.scss';
import { Link } from 'react-router-dom';

const Button = ({ children, className, icon, to }) => {
  const classNames = {
    long: cls['btn-long'],
    high: cls['btn-high']
  };
  return (
    <Link to={to || '#'}>
      <button className={`${classNames[className]} ${cls.btn}`}>
        <FontAwesomeIcon icon={icon} className={cls['btn-icon']} />
        {children}
      </button>
    </Link>
  );
};

export default Button;

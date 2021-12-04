import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import cls from './Title.module.scss';

const Title = ({ children, icon }) => {
  return (
    <h1 className={cls.title}>
      {icon ? (
        <span className={cls.icon}>
          <FontAwesomeIcon icon={icon} />
        </span>
      ) : (
        ''
      )}
      {children}
    </h1>
  );
};

export default Title;

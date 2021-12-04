import React from 'react';
import cls from './Label.module.scss';

const Label = ({ children }) => {
  return <p className={cls.label}>{children}</p>;
};

export default Label;

import React from 'react';
import cls from './PageWrapper.module.scss';

const PageWrapper = ({ children }) => {
  return <div className={cls.wrapper}>{children}</div>;
};

export default PageWrapper;

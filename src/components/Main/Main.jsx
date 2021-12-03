import React from 'react';
import Accounts from '../Accounts/Accounts';
import cls from './Main.module.scss';

const Main = () => {
  return (
    <div className={cls.main}>
      <Accounts />
      <div>Main2</div>
    </div>
  );
};

export default Main;

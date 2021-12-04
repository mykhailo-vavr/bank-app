import React from 'react';
import cls from './SendForm.module.scss';
import Title from '../../UI/Title/Title';

const SendForm = () => {
  return (
    <div className={cls.wrapper}>
      <Title icon="paper-plane">Send money</Title>
    </div>
  );
};

export default SendForm;

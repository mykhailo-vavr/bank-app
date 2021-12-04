import React from 'react';
import AccountsList from '../../components/AccountsList/AccountsList';
import SendForm from '../../components/SendForm/SendForm';
import Title from '../../UI/Title/Title';
import PageWrapper from '../../Wrappers/PageWrapper';
import cls from './SendMoney.module.scss';

const SendMoney = () => {
  return (
    <PageWrapper>
      <div className={cls.wrapper}>
        <Title icon="credit-card">Send money from</Title>
        <AccountsList />
      </div>
      <SendForm />
    </PageWrapper>
  );
};

export default SendMoney;

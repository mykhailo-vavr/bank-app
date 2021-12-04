import React from 'react';
import AccountsList from '../AccountsList/AccountsList';
import AccountsFooter from '../AccountsFooter/AccountsFooter';
import Title from '../../UI/Title/Title';
import cls from './Accounts.module.scss';

const Accounts = () => {
  return (
    <div className={cls.accounts}>
      <Title>Your accounts</Title>
      <AccountsList />
      <AccountsFooter />
    </div>
  );
};

export default Accounts;

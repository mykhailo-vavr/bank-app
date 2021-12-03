import React from 'react';
import AccountsContainer from '../AccountsList/AccountsList';
import AccountsFooter from '../AccountsFooter/AccountsFooter';
import cls from './Accounts.module.scss';

const Accounts = () => {
  return (
    <div className={cls.accounts}>
      <AccountsContainer />
      <AccountsFooter />
    </div>
  );
};

export default Accounts;

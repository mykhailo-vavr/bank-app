import React from 'react';
import AccountsFooterItem from '../AccountsFooterItem/AccountsFooterItem';
import cls from './AccountsFooter.module.scss';

const AccountsFooter = () => {
  const items = [
    { title: 'Request a card' },
    { title: 'Earn £ 25 for free' }
  ];
  return (
    <div className={cls.footer}>
      {items.map(item => (
        <AccountsFooterItem item={item} key={item.title} />
      ))}
    </div>
  );
};

export default AccountsFooter;

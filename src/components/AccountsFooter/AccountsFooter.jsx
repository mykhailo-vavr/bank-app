import React from 'react';
import AccountsFooterItem from '../AccountsFooterItem/AccountsFooterItem';
import cls from './AccountsFooter.module.scss';

const AccountsFooter = () => {
  const items = [
    {
      title: 'Request a card',
      icon: 'credit-card',
      text: 'Get a debit card for free'
    },
    {
      title: `Earn £ 25 for free`,
      icon: 'hand-holding-usd',
      text: 'Apply for pension'
    }
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

import React from 'react';
import cls from './AccountsFooterItem.module.scss';

const AccountsFooterItem = ({ item }) => {
  return (
    <div>
      <h4>{item.title}</h4>
    </div>
  );
};

export default AccountsFooterItem;

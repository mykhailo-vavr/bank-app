import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import cls from './AccountsFooterItem.module.scss';

const AccountsFooterItem = ({ item }) => {
  return (
    <div className={cls.item}>
      <FontAwesomeIcon icon={item.icon} />
      <span>
        <h4 className={cls.title}>{item.title}</h4>
        <p className={cls.text}>{item.text}</p>
      </span>
    </div>
  );
};

export default AccountsFooterItem;

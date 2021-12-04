import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import cls from './TransactionsItem.module.scss';

const TransactionsItem = ({ user }) => {
  return (
    <div className={cls.item}>
      <FontAwesomeIcon icon="user-circle" />
      {user.name}
    </div>
  );
};

export default TransactionsItem;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import cls from './AccountsListItem.module.scss';

const AccountsContainerItem = ({ account, index }) => {
  const currencySigns = {
    usd: 'dollar-sign',
    eur: 'euro-sign',
    gbp: 'pound-sign',
    krw: 'won-sign'
  };

  const colors = ['#42507f', '#fd3a6c', ' #f5855c', '#ffac30'];

  return (
    <li className={cls.item}>
      <span className={`${cls.wrapper} ${cls['wrapper-first']}`}>
        <span
          className={cls.circle}
          style={{ background: colors[index] }}
        >
          <FontAwesomeIcon icon={currencySigns[account.currency]} />
        </span>
        {account.title}
      </span>

      <span className={`${cls.wrapper} ${cls['wrapper-second']}`}>
        <FontAwesomeIcon icon={currencySigns[account.currency]} />
        {account.balance.toFixed(2)}
      </span>
    </li>
  );
};

export default AccountsContainerItem;

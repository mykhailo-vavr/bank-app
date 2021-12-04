import React, { useContext } from 'react';
import { AccountsContext } from '../../context/accounts/accountsContext';
import cls from './AccountsListItem.module.scss';

const AccountsContainerItem = ({ settings }) => {
  const colors = ['#42507f', '#fd3a6c', ' #f5855c', '#ffac30'];
  const { setAccount, currencySigns } = useContext(AccountsContext);

  const onClick = () => {
    setAccount(settings.account);
    settings.setActiveItem(settings.account);
  };

  return (
    <li
      className={`${cls.item} ${
        settings.activeItem === settings.account ? cls.active : ''
      }`}
      onClick={onClick}
    >
      <span className={`${cls.wrapper} ${cls['wrapper-first']}`}>
        <span
          className={cls.circle}
          style={{ background: colors[settings.index] }}
        >
          {currencySigns[settings.account.currency]}
        </span>
        {settings.account.title}
      </span>

      <span className={`${cls.wrapper} ${cls['wrapper-second']}`}>
        {`${
          currencySigns[settings.account.currency]
        }${settings.account.balance.toFixed(2)}`}
      </span>
    </li>
  );
};

export default AccountsContainerItem;

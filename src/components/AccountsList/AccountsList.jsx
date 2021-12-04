import React, { useContext, useEffect, useState } from 'react';
import cls from './AccountsList.module.scss';
import AccountsListItem from '../AccountsListItem/AccountsListItem';
import { APIContext } from '../../context/API/APIContext';

const AccountsList = () => {
  const { state, fetchAccounts } = useContext(APIContext);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    fetchAccounts();
    // eslint-disable-next-line
  }, []);
  return (
    <div className={cls.container}>
      <ul className={cls.list}>
        {state.accounts.map((account, index) => (
          <AccountsListItem
            key={account.title}
            settings={{
              account,
              index,
              activeItem,
              setActiveItem
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default AccountsList;

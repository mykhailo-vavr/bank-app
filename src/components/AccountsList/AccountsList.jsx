import React, { useEffect, useState } from 'react';
import cls from './AccountsList.module.scss';
import axios from 'axios';
import AccountsListItem from '../AccountsListItem/AccountsListItem';

const URL =
  'https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com/dev/data';

const headers = {
  'x-api-key': 'ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59'
};

const AccountsContainer = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL, {
          headers
        });
        setAccounts(response.data.body.accounts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={cls.container}>
      <h3 className={cls.title}>Your accounts</h3>
      <ul className={cls.list}>
        {accounts.map((account, index) => (
          <AccountsListItem
            account={account}
            key={account.title}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default AccountsContainer;

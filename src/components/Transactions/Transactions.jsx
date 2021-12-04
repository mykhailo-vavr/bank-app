import React from 'react';
import cls from './Transactions.module.scss';
import Label from '../../UI/Label/Label';
import Button from '../../UI/Button/Button';
import TransactionsItem from '../TransactionsItem/TransactionsItem';

const Transactions = () => {
  const users = [{ name: 'Leo W.' }, { name: 'Monica L.' }];
  return (
    <div className={cls.transactions}>
      <Label>Quick Transaction</Label>
      <div className={cls.wrapper}>
        <Button icon="paper-plane" className="high" to="/send">
          Send
          <br />
          Money
        </Button>
        {users.map(user => (
          <TransactionsItem user={user} key={user.name} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;

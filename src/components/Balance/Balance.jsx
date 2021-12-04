import React, { useContext } from 'react';
import { AccountsContext } from '../../context/accounts/accountsContext';
import Button from '../../UI/Button/Button';
import Label from '../../UI/Label/Label';
import InfoTables from '../InfoTables/InfoTables';
import Transactions from '../Transactions/Transactions';
import cls from './Balance.module.scss';

const Balance = () => {
  const { state, currencySigns } = useContext(AccountsContext);

  return (
    <div className={cls.container}>
      <span>
        <Label>Balance</Label>

        <div className={cls.wrapper}>
          <h2 className={cls.title}>
            {state.account ? (
              <>
                {currencySigns[state?.account?.currency]}
                {state?.account?.balance.toFixed(2)}
              </>
            ) : (
              'Choose account'
            )}
          </h2>
          <Button icon="piggy-bank" className="long">
            Top up
          </Button>
        </div>

        <Transactions />
      </span>

      <InfoTables />
    </div>
  );
};

export default Balance;

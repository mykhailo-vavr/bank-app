import React, { useReducer } from 'react';
import { AccountsContext } from './accountsContext';
import { accountsReducer } from './accountsReducer';

const AccountsState = ({ children }) => {
  const [state, dispatch] = useReducer(accountsReducer, {});

  const currencySigns = {
    usd: '$',
    eur: '€',
    gbp: '£',
    krw: '₩'
  };

  const setAccount = account => {
    dispatch({
      type: 'SET_ACCOUNT',
      payload: account
    });
  };

  return (
    <AccountsContext.Provider
      value={{ setAccount, state, currencySigns }}
    >
      {children}
    </AccountsContext.Provider>
  );
};

export default AccountsState;

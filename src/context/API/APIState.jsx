import React, { useReducer } from 'react';
import { APIContext } from './APIContext';
import { APIReducer } from './APIReducer';
import axios from 'axios';

const URL =
  'https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com/dev/data';

const headers = {
  'x-api-key': 'ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59'
};

const APIState = ({ children }) => {
  const initialState = {
    accounts: []
  };
  const [state, dispatch] = useReducer(APIReducer, initialState);

  const fetchAccounts = async () => {
    try {
      const response = await axios.get(URL, {
        headers
      });
      const payload = response.data.body.accounts;
      dispatch({ type: 'FETCH_ACCOUNTS', payload });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <APIContext.Provider value={{ fetchAccounts, state }}>
      {children}
    </APIContext.Provider>
  );
};

export default APIState;

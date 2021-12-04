import React from 'react';
import Home from '../../Pages/Home/Home';
import SendMoney from '../../Pages/SendMoney/SendMoney';
import NotFoundPage from '../../Pages/NotFoundPage/NotFoundPage';
import Menu from '../Menu/Menu';
import { Routes, Route } from 'react-router-dom';
import cls from './App.module.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheckSquare,
  faCoins,
  faCreditCard,
  faHandHoldingUsd,
  faHome,
  faPaperPlane,
  faPiggyBank,
  faUserCircle,
  faWallet
} from '@fortawesome/free-solid-svg-icons';
import APIState from '../../context/API/APIState';
import AccountsState from '../../context/accounts/AccountsState';

library.add(
  faHome,
  faPaperPlane,
  faPiggyBank,
  faWallet,
  faUserCircle,
  faCreditCard,
  faHandHoldingUsd,
  faCheckSquare,
  faCoins
);

function App() {
  return (
    <div className={cls.app}>
      <Menu />
      <APIState>
        <AccountsState>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/send" element={<SendMoney />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AccountsState>
      </APIState>
    </div>
  );
}

export default App;

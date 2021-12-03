import React from 'react';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import cls from './App.module.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faDollarSign,
  faEuroSign,
  faHome,
  faPaperPlane,
  faPiggyBank,
  faPoundSign,
  faUserCircle,
  faWallet,
  faWonSign
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faHome,
  faPaperPlane,
  faPiggyBank,
  faWallet,
  faUserCircle,
  faWonSign,
  faDollarSign,
  faEuroSign,
  faPoundSign
);

function App() {
  return (
    <div className={cls.app}>
      <Menu />
      <Main />
    </div>
  );
}

export default App;

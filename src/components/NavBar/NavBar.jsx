import React from 'react';
import NavBarItem from '../NavBarItem/NavBarItem';
// import cls from './NavBar.module.scss';

const NavBar = () => {
  const items = [
    { icon: 'home', text: 'Home', to: '/' },
    { icon: 'paper-plane', text: 'Send Money', to: '/send' },
    { icon: 'piggy-bank', text: 'Top Up', to: '/&' },
    { icon: 'wallet', text: 'Accounts', to: '/$' }
  ];

  return (
    <nav>
      <ul>
        {items.map(({ icon, text, to }) => (
          <NavBarItem settings={{ icon, text, to }} key={text} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

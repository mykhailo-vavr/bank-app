import React from 'react';
import NavBarItem from '../NavBarItem/NavBarItem';
// import cls from './NavBar.module.scss';

const NavBar = () => {
  const items = [
    { icon: 'home', text: 'Home' },
    { icon: 'paper-plane', text: 'Send Money' },
    { icon: 'piggy-bank', text: 'Top Up' },
    { icon: 'wallet', text: 'Accounts' }
  ];

  return (
    <nav>
      <ul>
        {items.map(({ icon, text }) => (
          <NavBarItem icon={icon} text={text} key={text} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

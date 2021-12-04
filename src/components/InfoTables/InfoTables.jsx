import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import InfoTablesItem from '../InfoTablesItem/InfoTablesItem';
import cls from './InfoTables.module.scss';

const InfoTables = () => {
  const infoItems = [
    {
      first: {
        icon: 'check-square',
        labelText: 'Account type:',
        value: <span style={{ fontWeight: 500 }}>Personal</span>
      },
      second: {
        icon: 'coins',
        labelText: 'Currency',
        value: (
          <span style={{ fontWeight: 500 }}>
            Euro <b>EUR</b>
          </span>
        )
      }
    },
    {
      first: {
        icon: 'piggy-bank',
        labelText: 'Passive saving',
        value: (
          <span style={{ fontWeight: 500 }}>
            Enabled <b>20%</b>
          </span>
        )
      },
      second: {
        icon: '',
        labelText: 'Share Account',
        value: (
          <div>
            {new Array(3).fill('user-circle').map(icon => (
              <FontAwesomeIcon
                style={{ marginLeft: '5px' }}
                icon={icon}
                key={Date.now() * Math.random()}
              />
            ))}
          </div>
        )
      }
    }
  ];

  return (
    <div className={cls.wrapper}>
      {infoItems.map(item => (
        <InfoTablesItem items={item} key={item.first.labelText} />
      ))}
    </div>
  );
};

export default InfoTables;

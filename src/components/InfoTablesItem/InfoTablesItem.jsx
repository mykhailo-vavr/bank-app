import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Label from '../../UI/Label/Label';
import cls from './InfoTablesItem.module.scss';

const InfoTablesItem = ({ items }) => {
  return (
    <div className={cls.wrapper}>
      <div
        className={`${cls['wrapper-item']} ${cls['wrapper-item_top']}`}
      >
        <span className={cls['left-side']}>
          {items.first.icon ? (
            <FontAwesomeIcon icon={items.first.icon} />
          ) : (
            <div></div>
          )}
          <Label>{items.first.labelText}</Label>
        </span>
        {items.first.value}
      </div>

      <div
        className={`${cls['wrapper-item']} ${cls['wrapper-item_bottom']}`}
      >
        <span className={cls['left-side']}>
          {items.second.icon ? (
            <FontAwesomeIcon icon={items.second.icon} />
          ) : (
            <div></div>
          )}
          <Label>{items.second.labelText}</Label>
        </span>
        {items.second.value}
      </div>
    </div>
  );
};

export default InfoTablesItem;

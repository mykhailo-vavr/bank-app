import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import cls from './Profile.module.scss';

const Profile = () => {
  return (
    <span>
      <FontAwesomeIcon icon="user-circle" />
      <span className={cls.span}>Profile</span>
    </span>
  );
};

export default Profile;


import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className="">
      <div className={s.profile__img}>
        <img src="http://atbnn.ru/_ph/7/313119963.jpg" alt="" />
      </div>
      <div className={s.descriptionBlock}>
        avatar + description
      </div>
    </div>
  )
}

export default ProfileInfo;
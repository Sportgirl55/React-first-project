import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
  return (
    <div className={s.messagesItem}>
      {/* <div className={s.post__thumb}>
        <img src="https://shutniki.club/wp-content/uploads/2020/01/smeshnye_avatarki_34_17105705.jpg" alt="" />
      </div> */}
      <div className={s.dialog}>{props.message}</div>
    </div>

  );
}

export default Message;
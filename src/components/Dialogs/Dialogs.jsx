import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';



const DialogItem = (props) => {
  let dialogId = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={dialogId}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) => {
  return (
    <div className={s.dialog}>{props.message}</div>
  );
}


const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem name='Sportgirl' id='1' />
        <DialogItem name='Саша' id='2' />
        <DialogItem name='Петя' id='3' />
        <DialogItem name='Вася' id='4' />
        <DialogItem name='Коля' id='5' />
      </div>
      <div className={s.dialog}>
        <Message message='Превед, медвед!' />
        <Message message='Воу-воу, чокаво?' />
        <Message message='hello, world!' />
      </div>
    </div>
  )
}

export default Dialogs;
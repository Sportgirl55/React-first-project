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

  let dialogs = [
    { id: 1, name: 'Sportgirl' },
    { id: 2, name: 'Саша' },
    { id: 3, name: 'Петя' },
    { id: 4, name: 'Вася' },
    { id: 5, name: 'Коля' },
  ];

  let messages = [
    { id: 1, message: 'Превед, медвед!' },
    { id: 2, message: 'Воу-воу, чокаво?' },
    { id: 3, message: 'hello, world!' },
    { id: 4, message: 'YO' },
    { id: 5, message: 'Hi!' },
  ];

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = messages.map(m => <Message message={m.message} id={m.id} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElements}
      </div>
      <div className={s.dialog}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;
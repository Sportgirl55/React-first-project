import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';



const DialogItem = (props) => {
  let dialogId = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      <div className={s.post__thumb}>
        <img src="https://steamuserimages-a.akamaihd.net/ugc/851596865081378786/45331124A11D6AF6CFB301BB6AD84A9BAF84D9F2/?imw=512&amp;imh=357&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true" alt="" />
      </div>
      <NavLink to={dialogId}>{props.name}</NavLink>
    </div>
  );
}

export default DialogItem;
import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {
  // debugger;

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} />);

  let newMessageElement = React.createRef();
  let onSendMessageClick = () => {
    props.sendMessage();

  }

  let onMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);

  }

  return <div className={s.dialogs}>
    <div className={s.dialogItems}>
      {dialogsElements}
    </div>
    <div className={s.dialog}>
      {messagesElements}
    </div>
    <div className={s.messPost}>
      <textarea onChange={onMessageChange}
        placeholder="Enter your message"
        ref={newMessageElement}
        value={state.newMessageBody} />
      <button onClick={onSendMessageClick} ><span>Add message</span></button>
    </div>

  </div>
}

export default Dialogs;
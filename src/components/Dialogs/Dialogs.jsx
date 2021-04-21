import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {
  // debugger;
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} />);

  let newMessageElement = React.createRef();
  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  }

  let onMessageChange = () => {
    let body = newMessageElement.current.value;
    props.dispatch(updateNewMessageBodyCreator(body));
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
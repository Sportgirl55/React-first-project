import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';


const DialogsContainer = () => {
  // debugger;
  return (<StoreContext.Consumer>
    {  (store) => {
      let state = store.getState().dialogsPage;

      let onSendMessageClick = () => {
        store.dispatch(sendMessageCreator());
      }

      let onMessageChange = (body) => {
        store.dispatch(updateNewMessageBodyCreator(body));
      }
      return <Dialogs updateNewMessageBody={onMessageChange} sendMessage={onSendMessageClick}
        dialogsPage={state} />
    }
    }
  </StoreContext.Consumer>)
}

export default DialogsContainer;
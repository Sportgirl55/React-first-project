let SEND_MESSAGE = 'SEND-MESSAGE';
let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState =  {
  dialogs: [
    { id: 1, name: 'Sportgirl' },
    { id: 2, name: 'Саша' },
    { id: 3, name: 'Петя' },
    { id: 4, name: 'Вася' },
    { id: 5, name: 'Коля' },
  ],
  messages: [
    { id: 1, message: 'Превед, медвед!' },
    { id: 2, message: 'Воу-воу, чокаво?' },
    { id: 3, message: 'hello, world!' },
    { id: 4, message: 'YO' },
    { id: 5, message: 'Hi!' },
  ],
  newMessageBody: ''
}


const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = {
        id: 5,
        message: state.newMessageBody,
      }

      state.messages.push(body);
      state.newMessageBody = '';
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    default:
      return state;
  }
}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
});

  export default dialogsReducer;
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
  _state: {
    profilePage: {
      postsArray: [
        { id: 1, message: 'Привет, медвед', count: '20' },
        { id: 2, message: 'первый, нах!', count: '30' },
        { id: 3, message: 'Хей!!Чокаво?', count: '210' },
        { id: 4, message: 'Привет, медвед', count: '22' },
        { id: 5, message: 'Хей!!Чокаво?', count: '25' },
      ],
      newPostText: 'it-kamasutra.com'
    },

    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Саша' },
        { id: 3, name: 'Света' }
      ],
    }
  },

  _callSubscriber() {
    console.log("State was changed")
  },


  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer; // паттерн observer // publisher-subscriber
  },

  dispatch(action) {  // { type: 'ADD-POST' } обязательно должно быть
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state);
  }
}






export default store;

window.store = store;

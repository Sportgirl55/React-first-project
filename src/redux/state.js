let state = {
  profilePage: {
    postsArray: [
      { id: 1, message: 'Привет, медвед', count: '20' },
      { id: 2, message: 'первый, нах!', count: '30' },
      { id: 3, message: 'Хей!!Чокаво?', count: '210' },
      { id: 4, message: 'Привет, медвед', count: '22' },
      { id: 5, message: 'Хей!!Чокаво?', count: '25' },
    ]

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
    ]
  },
  sidebar: {
    friends: [
      { id: 1, name: 'Andrew'},
      { id: 2, name: 'Саша' },
      { id: 3, name: 'Света' }
    ],
  }
};

export default state;
let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =  {
  postsArray: [
    { id: 1, message: 'Привет, медвед', count: '20' },
    { id: 2, message: 'первый, нах!', count: '30' },
    { id: 3, message: 'Хей!!Чокаво?', count: '210' },
    { id: 4, message: 'Привет, медвед', count: '22' },
    { id: 5, message: 'Хей!!Чокаво?', count: '25' },
  ],
  newPostText: 'it-kamasutra.com'
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        count: 0
      }
      state.postsArray.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export default profileReducer;
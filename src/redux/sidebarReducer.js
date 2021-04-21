let initialState =  {
  friends: [
    { id: 1, name: 'Andrew' },
    { id: 2, name: 'Саша' },
    { id: 3, name: 'Света' }
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
}

export default sidebarReducer;
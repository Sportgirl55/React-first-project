import store from './redux/redux-store';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './StoreContext';




let rerendererEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerendererEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerendererEntireTree(state)
});




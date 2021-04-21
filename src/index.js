import store from './redux/redux-store';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';




let rerendererEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state}
         dispatch={store.dispatch.bind(store)}
         store={store} />
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

 


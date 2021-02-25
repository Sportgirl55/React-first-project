// import logo from './logo.svg';
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route exact path='/dialogs'
          render={() => <Dialogs
            state={props.state.dialogsPage} />} />
        <Route path='/profile'
          render={() => <Profile
            state={props.state.profilePage} />} />
        <Route component={News} path='/news' />
        <Route component={Music} path='/music' />
        <Route component={Settings} path='/settings' />
        <Route component={Friends} path='/friends' />
      </div>
    </div>
  );
}

export default App;

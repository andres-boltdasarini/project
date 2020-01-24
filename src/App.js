import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
 /*   let dialogs = [
        {id: 1, name: 'dima'},
        {id: 2, name: 'andrey'},
        {id: 3, name: 'kolya'},
        {id: 4, name: 'ilyya'},
        {id: 5, name: 'sanya'},
        {id: 6, name: 'jeka'},
        {id: 7, name: 'semeeen'},
    ]*/

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.dialogsPage}/>
                <div class='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               state={props.state.dialogsPage}/>}/>
                    <Route path='/profile'
                           render={() => <Profile
                               state={props.state.profilePage}
                           addPost={props.addPost}/>}/>
                    <Route path='/news' render ={ () =>  <News /> }/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>

                </div>
                <div>

                </div>
            </div>
        </BrowserRouter>)
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from "./redux/state";

/*let dialogs = [
    {id: 1, name: 'dima'},
    {id: 2, name: 'andrey'},
    {id: 3, name: 'kolya'},
    {id: 4, name: 'ilyya'},
    {id: 5, name: 'sanya'},
    {id: 6, name: 'jeka'},
    {id: 7, name: 'semeen'},
]*/

ReactDOM.render(<App state={state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

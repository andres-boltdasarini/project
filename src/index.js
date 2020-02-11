import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, sendMessage, updateNewTextMessage} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                sendMessage={store.sendMessage.bind(store)}
                updateNewTextMessage={store.updateNewTextMessage.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root'));
}


rerenderEntireTree(store._state)

store.subscribe(rerenderEntireTree)

serviceWorker.unregister();

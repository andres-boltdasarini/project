import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, sendMessage, updateNewTextMessage} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                sendMessage={sendMessage}
                updateNewTextMessage={updateNewTextMessage}
            />
        </BrowserRouter>, document.getElementById('root'));
}



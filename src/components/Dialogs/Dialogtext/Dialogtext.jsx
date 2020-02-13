import React from 'react';
import MyPosts from "../../Profile/MyPosts/MyPosts";
import {addPostActionCreator, sendMessageActionCreator, updateNewTextMessageActionCreator} from "../../../redux/state";



export const Dialogtext = (props) => {
    let newmessageElement = React.createRef()

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }
    let onMessageChange = () => {
        let text = newmessageElement.current.value
        let action = updateNewTextMessageActionCreator(text)
        props.dispatch(action)
    }


    return (
        <div>
            <textarea onChange={onMessageChange} ref={newmessageElement} value={props.newMessageText}/>
            <button onClick={sendMessage}>send message</button>
        </div>)
}

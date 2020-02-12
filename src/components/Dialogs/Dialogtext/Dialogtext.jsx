import React from 'react';
import MyPosts from "../../Profile/MyPosts/MyPosts";


export const Dialogtext = (props) => {
    let newmessageElement = React.createRef()

    let sendMessage = () => {
        props.dispatch({type: 'SEND-MESSAGE'})
    }
    let onMessageChange = () => {
        let text = newmessageElement.current.value
        let action = {type: 'UPDATE-NEW-TEXT-MESSAGE', newMess: text};
        props.dispatch(action)
    }


    return (
        <div>
            <textarea onChange={onMessageChange} ref={newmessageElement} value={props.newMessageText}/>
            <button onClick={sendMessage}>send message</button>
        </div>)
}

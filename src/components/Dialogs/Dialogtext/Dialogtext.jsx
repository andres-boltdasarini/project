import React from 'react';


export const Dialogtext = (props) => {
    let newmessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage()}

    let onMessageChange = () => {
        let text = newmessageElement.current.value
        props.updateNewTextMessage(text);
    }

    return (
        <div>
            <textarea onChange={onMessageChange} ref={newmessageElement} value={props.newMessageText}/>
            <button onClick={sendMessage}>send message</button>
        </div>)
}
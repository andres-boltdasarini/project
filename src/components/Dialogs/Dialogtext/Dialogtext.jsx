import React from 'react';


export const Dialogtext = (props) => {
    let newmessageElement = React.createRef();
    let sendMessage = () => {
        let text = newmessageElement.current.value
        alert(text)
    }

    return (
        <div>
            <textarea ref={newmessageElement}> </textarea>
            <button onClick={sendMessage}>send message</button>
        </div>)
}


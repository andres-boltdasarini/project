const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE'

const dialogReducer = (state, action) => {

     if (action.type === 'SEND-MESSAGE') {
        let newMessage = {
            id: 2,
            text: state.newMessageText
        }
     state.messages.push(newMessage)
     state.newMessageText = ''

    } else if (action.type === 'UPDATE-NEW-TEXT-MESSAGE') {
      state.newMessageText = action.newMess

    }


return state
}

export const sendMessageActionCreator = () => {

    return {
        type: SEND_MESSAGE}
}
export const updateNewTextMessageActionCreator = (text) => {
    return{
        type: UPDATE_NEW_TEXT_MESSAGE  , newMess: text
    }
}
export default dialogReducer
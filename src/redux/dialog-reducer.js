const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Kolya'},
        {id: 4, name: 'Ilya'},
        {id: 5, name: 'Sanya'},
        {id: 6, name: 'Jeka'},
        {id: 7, name: 'Semen'},
    ],
    messages: [
        {id: 1, text: 'try'},
        {id: 2, text: 't'},
        {id: 3, text: 'tr'},
        {id: 4, text: 'try'},
        {id: 5, text: 'try'},
    ],
    newMessageText: 'qqq'
}

const dialogReducer = (state = initialState, action) => {

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
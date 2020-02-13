const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'hi, how are you', LikesCount: 12},
                {id: 2, text: 'it\'s my first post', LikesCount: 2},
                {id: 3, text: 'tratata', LikesCount: 1},
            ],
            newPostText: 'it-kama'
        },
        dialogsPage: {
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
    },
    getState() {
        debugger
        return this._state
    },
    _callSubscriber() {
        console.log('State change')
    },
    subscribe(observer) {
        this._callSubscriber = observer //observer publisher-sunscriber панерн addeventlistener
    },
    dispatch(action) {

        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 2,
                text: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === 'SEND-MESSAGE') {
            let newMessage = {
                id: 2,
                text: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-TEXT-MESSAGE') {
            this._state.dialogsPage.newMessageText = action.newMess
            this._callSubscriber(this._state)
        }
    }

}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
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
export default store;
window.state = store;
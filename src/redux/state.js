import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";



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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)


            this._callSubscriber(this._state)
        }
    }




export default store;
window.state = store;
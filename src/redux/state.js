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
    _callSubscriber ()  {
        console.log ('State change')
    },
    addPost  ()  {
        debugger
        let newPost = {
            id: 2,
            text: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText  (newText)  {

        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe   (observer)  {
        this._callSubscriber = observer //observer publisher-sunscriber панерн addeventlistener
    },
    sendMessage  ()  {
        let newMessage = {
            id:2,
            text:this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    updateNewTextMessage  (newMess)  {
        this._state.dialogsPage.newMessageText = newMess
        this._callSubscriber(this._state)
    }
}


export default store;
window.state = store;
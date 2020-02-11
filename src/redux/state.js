let rerenderEntireTree = () => {
    console.log ('State change')
}

let state = {
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
}

window.state = state

export let addPost = (postMessage) => {
    let newPost = {
        id: 2,
        text: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}
export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export let sendMessage = () => {
    let newMessage = {
        id:2,
        text:state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state)
}
export  let updateNewTextMessage = (newMess) => {
    state.dialogsPage.newMessageText = newMess
    rerenderEntireTree(state)
}

export default state;
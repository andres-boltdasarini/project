import {rerenderEntireTree} from "../render";

let state = {

    profilePage: {
        posts: [
            {id: 1, text: 'hi, how are you', LikesCount: 12},
            {id: 2, text: 'it\'s my first post', LikesCount: 2},
            {id: 3, text: 'tratata', LikesCount: 1},
        ],

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
        ]
    }
}

export let addPost = (postMessage) => {

    let newPost = {
        id: 2,
        text: postMessage,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state;
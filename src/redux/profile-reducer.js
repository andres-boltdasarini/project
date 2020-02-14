
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, text: 'hi, how are you', LikesCount: 12},
        {id: 2, text: 'it\'s my first post', LikesCount: 2},
        {id: 3, text: 'tratata', LikesCount: 1},
    ],
    newPostText: 'it-kama'
}

 const profileReducer = (state = initialState, action) => {

    if (action.type === 'ADD-POST') {
        let newPost = {
            id: 2,
            text: state.newPostText,
            likeCount: 0
        }
        state.posts.push(newPost)
        state.newPostText = ''

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText

    }
    return state
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
export default profileReducer
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    users: [
        {id: 1, user: 'Dima', from: 'Belarus', discription:'i am look'},
        {id: 2, user: 'Andrey', from: 'Russia', discription:'i am look best'},
        {id: 3, user: 'Sergey', from: 'Italy', discription:'i am'},
        {id: 4, user: 'Max', from: 'France', discription:'i'},
    ],
    newPostText: 'it-kamasutra.com'
};

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text })

export default usersReducer;
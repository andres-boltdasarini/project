import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import Like from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id:1,text: 'hi, how are you',LikesCount:12},
        {id:2,text: 'it\'s my first post',LikesCount:2},
        {id:3,text: 'tr',LikesCount:1},
    ]



    let postElement = posts
        .map(p => <Post message={p.text} id={p.id} like={p.LikesCount} />)

    return (
        <div className={s.postBlock}>
           <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>)
}

export default MyPosts;
import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import Like from './Post/Post';

const MyPosts = (props) => {


    let postElement =
        props.posts.map(p => <Post message={p.text} id={p.id} like={p.LikesCount}/>)

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
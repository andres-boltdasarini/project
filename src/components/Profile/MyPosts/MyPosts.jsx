import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import Like from './Post/Post';

const MyPosts = () => {
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
                <Post message='hi, how are you?' like='5'/>

                < Like message='8'/>

                <Post message="it's my first post" like='7'/>


            </div>

        </div>)

}

export default MyPosts;
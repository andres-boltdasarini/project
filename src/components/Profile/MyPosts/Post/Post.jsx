import React from 'react';
import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://avatars.mds.yandex.net/get-pdb/988157/3bf8f275-54de-4e09-a9d8-f82f23a1f6db/s1200'
            alt='ava'/>
            {props.message}
            {props.like}
        </div>
    )
}


export default Post;
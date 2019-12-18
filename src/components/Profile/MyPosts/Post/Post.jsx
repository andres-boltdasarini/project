import React from 'react';
import s from './Post.module.css'


const Post = (props) => {

  return (

    <div className={s.item}>
      <img src='https://avatars.mds.yandex.net/get-pdb/163339/5110e93e-206b-473b-91fa-6cbfb1ebfb42/s1200' />
      {props.message}
      {props.like}
     
      
    </div>

  )
}



export default Post;
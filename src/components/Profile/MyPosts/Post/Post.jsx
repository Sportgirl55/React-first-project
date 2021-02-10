
import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return <div className={s.post}>
    <div className={s.post__wrap}>
      <div className="post__thumb">
        <img src="https://shutniki.club/wp-content/uploads/2020/01/smeshnye_avatarki_34_17105705.jpg" alt="" />
      </div>
      <p className={s.post__text}>
        {props.message}
      </p>
    </div>
    <div className="like">
      <span>Like {props.count} </span>
    </div>
  </div>
}

export default Post;
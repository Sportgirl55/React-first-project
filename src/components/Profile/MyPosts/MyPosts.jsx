
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return <div className={s.postsBlock}>
    <h2>My posts</h2>
    <div className="">
      <h3>New post</h3>
      <div className="">
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div className="">
        <button><span>Send</span></button>
      </div>
    </div>
    <div className={s.posts}>
      <Post message='Привет, медвед' count='20' />
      <Post message='первый, нах!' count='30' />
      <Post message='Хей!!Чокаво?' count='50' />
    </div>
  </div>
}

export default MyPosts;
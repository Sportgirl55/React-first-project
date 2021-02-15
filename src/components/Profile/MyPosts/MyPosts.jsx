
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsArray = [
    { id: 1, message: 'Привет, медвед', count: '20' },
    { id: 2, message: 'первый, нах!', count: '30' },
    { id: 3, message: 'Хей!!Чокаво?', count: '210' },
    { id: 4, message: 'Привет, медвед', count: '22' },
    { id: 5, message: 'Хей!!Чокаво?', count: '25' },

  ];

  let postsElements = postsArray.map(p => <Post message={p.message} count={p.count} />);


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
      {postsElements}
    </div>
  </div>
}

export default MyPosts;

import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElements = props.postsArray.map(p => <Post message={p.message} count={p.count} />);

  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
     alert(text);
   }

  return <div className={s.postsBlock}>
    <h2>My posts</h2>
    <div className="">
      <h3>New post</h3>
      <div className="">
        <textarea ref = {newPostElement} name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div className="">
        <button onClick = { addPost } ><span>Add post</span></button>
      </div>
    </div>
    <div className={s.posts}>
      {postsElements}
    </div>
  </div>
}

export default MyPosts;
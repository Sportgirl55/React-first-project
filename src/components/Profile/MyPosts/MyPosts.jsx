
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

  // debugger;

  let postsElements = props.postsArray.map(p => <Post message={p.message} count={p.count} />);
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);

  }

  return <div className={s.postsBlock}>
    <h2>My posts</h2>
    <div className="">
      <h3>New post</h3>
      <div className="">
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      </div>
      <div className="">
        <button onClick={addPost} ><span>Add post</span></button>
      </div>
    </div>
    <div className={s.posts}>
      {postsElements}
    </div>
  </div>
}

export default MyPosts;
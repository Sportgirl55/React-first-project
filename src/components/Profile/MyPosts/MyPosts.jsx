import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

 //  debugger;

  let postsElements = props.posts.map(p => <Post message={p.message} count={p.count} />);
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);

  }

  return <div className={s.postsBlock}>
    <h2>My posts</h2>
    <div className="">
      <h3>New post</h3>
      <div className="">
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      </div>
      <div className="">
        <button onClick={onAddPost} ><span>Add post</span></button>
      </div>
    </div>
    <div className={s.posts}>
      {postsElements}
    </div>
  </div>


}

export default MyPosts;
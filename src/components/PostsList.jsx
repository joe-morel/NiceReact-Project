import Post from "./Post";

import classes from  './PostsList.module.css';

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Joe" body="React.js is awesome!" />
      <Post author="Laura" body="Por fin Joelito!" />
    </ul>
  );
}

export default PostsList;

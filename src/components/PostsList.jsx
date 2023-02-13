import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";

import classes from "./PostsList.module.css";

function PostsList({isPosting, onStopPosting}) {



  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
        // onBodyChange={bodyChangeHandler}
        //  onAuthorChange={authorChangeHandler} 
         onCancel={onStopPosting}         
          />
       </Modal>
      )}
      <ul className={classes.posts}>
  
        <Post author="Laura" body="Por fin Joelito!" />
      </ul>
    </>
  );
}

export default PostsList;

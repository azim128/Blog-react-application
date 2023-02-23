import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth, db } from "../confic/FirebaseConfic";
import '../styles/createpost.css';

const CreatePost = () => {
    const [title,setTitle] = useState('');
    const [post,setpost] = useState('');
    const navigate =useNavigate();
    const postCollectionRef = collection(db,'posts');

    const createPost1 = async()=>{
        await addDoc(postCollectionRef,{title,post,author:{name: Auth.currentUser.displayName ,id:Auth.currentUser.uid}});
        navigate('/')

    }

  return (
    <div className="container">
      <div className="post-body">
        <div className="post-form">
          <h1>Create Your Post</h1>
          <div className="input-grp">
            <label>Post Title:</label>
            <input type="text" placeholder="Give Your Post Title" onChange={(e)=>{setTitle(e.target.value)}}/>
          </div>
          <div className="input-grp">
          <label>Post Body:</label>
            <input type="text" placeholder="Write Your Post" onChange={(e)=>{setpost(e.target.value)}} />
          </div>
          <div className="submit-btn" onClick={createPost1}>Post Now</div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

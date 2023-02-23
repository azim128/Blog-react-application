import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Auth, db } from "../confic/FirebaseConfic";
import '../styles/blog.css';
import { AuthContext } from './AuthContext';

const Blog = () => {
  const [postList, setPostList] = useState([]);
  const { isLoggedIn } = useContext(AuthContext);
  const postCollectionRef = collection(db, "posts");
  const getPosts = async () => {
    const data = await getDocs(postCollectionRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const deletePost = async (postId) => {
    await deleteDoc(doc(db, "posts", postId));
    setPostList(postList.filter(post => post.id !== postId));
  };
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <div className="main-blog">
        <div className="row">
      {postList.map((post) => {
        return <div key={post.id} className='col'>
            <div className="post_body">
                <h1>{post.title}</h1>
                <p>{post.post}</p>
                <h5>Author: {post.author?.name}</h5>
                {isLoggedIn && (post.author.id ===Auth.currentUser.uid) &&
                (<button className="material-icons-two-tone" onClick={() => deletePost(post.id)}>Delete</button>)}
                
            </div>
            
        </div>;
      })}
    </div>
    </div>
  );
};

export default Blog;

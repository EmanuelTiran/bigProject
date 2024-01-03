import React, { useState, useEffect } from "react";
import axios from 'axios';
import Comment from './comment'; // ייבוא קומפוננטת Comment

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  const handlePosts = async () => {
    try {
      const response = await axios.get('http://localhost:5300/api/user/post/');

      if (response.data.authenticated) {
        console.log('posts failed.');
        return "posts failed";
      } else {
        console.log('posts successful!');
        console.log(response.data);
        setPosts(response.data);
        return response.data;
      }
    } catch (error) {
      console.error('Error occurred during authentication:', error);
    }
  };

  useEffect(() => {
    handlePosts();
  }, []);

  return (
    <div>
      <h2>Posts with Comments:</h2>
      {posts.map((post) => (
        <div className="posts" key={post.id_post}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <Comment postId={post.id_post} /> {/* העברת postId לקומפוננטת Comment */}
        </div>
      ))}
    </div>
  );
};

export default Posts;

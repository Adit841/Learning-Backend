import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRNilyhJJl6TC7XVoMqEs1Qeve76TomEd2h5pMsQuWlsEX-qhlOE2eQM&s",
      caption: "luffy",
    },
  ]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
    .then((res) => {
      setPosts(res.data.posts)
    })
  }, [])
  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <h1>No posts available</h1>
      )}
    </section>
  );
};

export default Feed;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MainPost.css";
import axios from "axios";

const MainPost = () => {
  const [loadedPost, setLoadedPost] = useState();
  let { postId } = useParams();

  useEffect(() => {
    if (!loadedPost) {
      axios.get("http://localhost:3001/posts/" + postId).then((response) => {
        console.log(response.data);
        setLoadedPost(response.data);
      });
    }
  });

  let PostData = undefined;

  if (postId) {
    PostData = <h1>Loading post</h1>;
  }

  if (loadedPost) {
    PostData = (
      <div className="fullPost">
        <h1>Post {loadedPost.id}</h1>
        <p>{loadedPost.title}</p>
        <p>{loadedPost.desc}</p>
        <img src={loadedPost.img} alt={loadedPost.title} />
      </div>
    );
  }

  return PostData;
};

export default MainPost;

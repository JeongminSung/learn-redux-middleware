import React from "react";

function PostsById({ postsById }) {
  console.log("postsById", postsById);
  const { title, body } = postsById;
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default PostsById;

import React from "react";
import PostsByIdContainer from "../containers/PostsByIdContainer";

function PostByIdPage({ match }) {
  const { id } = match.params;
  const postId = parseInt(id, 10);
  return <PostsByIdContainer postId={postId} />;
}

export default PostByIdPage;

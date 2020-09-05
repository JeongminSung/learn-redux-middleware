import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostsById } from "../modules/posts";
import PostsById from "../components/PostsById";

function PostsByIdContainer({ postId }) {
  const { data, loading, error } = useSelector(
    (state) => state.posts.postsById,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsById(postId));
  }, [postId, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <PostsById postsById={data} />;
}

export default PostsByIdContainer;

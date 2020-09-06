import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostsById, goToHome } from "../modules/posts";
import PostsById from "../components/PostsById";
import { reducerUtils } from "../lib/asyncUtils";

function PostsByIdContainer({ postId }) {
  const { data, loading, error } = useSelector(
    (state) => state.posts.postsById[postId] || reducerUtils.initial(),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getPostsById(postId));
  }, [postId, dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <>
      <button onClick={() => dispatch(goToHome())}>홈으로 이동</button>
      <PostsById postsById={data} />
    </>
  );
}

export default PostsByIdContainer;

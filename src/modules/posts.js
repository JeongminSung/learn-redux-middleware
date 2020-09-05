import * as postsAPI from "../api/posts";
import {
  reducerUtils,
  createPromiseThunk,
  handleAsyncActions,
} from "../lib/asyncUtils";

//액션 생성
const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POSTS_BY_ID = "GET_POSTS_BY_ID";
const GET_POSTS_BY_ID_SUCCESS = "GET_POSTS_BY_ID_SUCCESS";
const GET_POSTS_BY_ID_ERROR = "GET_POSTS_BY_ID_ERROR";

//thunk
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPostsById = createPromiseThunk(
  GET_POSTS_BY_ID,
  postsAPI.getPostsById,
);
//리듀서 작성
const initialState = {
  posts: reducerUtils.initial(),
  postsById: reducerUtils.initial(),
};

const getPostsReducer = handleAsyncActions(GET_POSTS, "posts");
const getPostsByIdReducer = handleAsyncActions(GET_POSTS_BY_ID, "postsById");

export default function posts(state = initialState, action) {
  switch (action.type) {
    //posts
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return getPostsReducer(state, action);
    //postsById
    case GET_POSTS_BY_ID:
    case GET_POSTS_BY_ID_SUCCESS:
    case GET_POSTS_BY_ID_ERROR:
      return getPostsByIdReducer(state, action);
    default:
      return state;
  }
}

import * as postsAPI from "../api/posts";
import {
  reducerUtils,
  createPromiseThunk,
  handleAsyncActions,
  createPromiseThunkById,
  handleAsyncActionsById,
} from "../lib/asyncUtils";

//액션 생성
const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POSTS_BY_ID = "GET_POSTS_BY_ID";
const GET_POSTS_BY_ID_SUCCESS = "GET_POSTS_BY_ID_SUCCESS";
const GET_POSTS_BY_ID_ERROR = "GET_POSTS_BY_ID_ERROR";

const CLEAR_POST = "CLEAR_POST";

//thunk
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPostsById = createPromiseThunkById(
  GET_POSTS_BY_ID,
  postsAPI.getPostsById,
);
export const goToHome = () => (dispatch, getState, { history }) => {
  history.push("/");
};

export const clearPost = () => ({ type: CLEAR_POST });
//리듀서 작성
const initialState = {
  posts: reducerUtils.initial(),
  postsById: {},
};

const getPostsReducer = handleAsyncActions(GET_POSTS, "posts", true);
const getPostsByIdReducer = handleAsyncActionsById(
  GET_POSTS_BY_ID,
  "postsById",
  true,
);

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
    case CLEAR_POST:
      return {
        ...state,
        post: reducerUtils.initial(),
      };
    default:
      return state;
  }
}

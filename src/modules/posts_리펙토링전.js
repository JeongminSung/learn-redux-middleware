import * as postAPI from "../api/posts";
import { reducerUtils } from "../lib/asyncUtils";

//액션 생성
const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POSTS_BY_ID = "GET_POSTS_BY_ID";
const GET_POSTS_BY_ID_SUCCESS = "GET_POSTS_BY_ID_SUCCESS";
const GET_POSTS_BY_ID_ERROR = "GET_POSTS_BY_ID_ERROR";

//thunk
export const getPosts = () => async (dispatch) => {
  //요청이 시작됨
  dispatch({ type: GET_POSTS });
  //API를 호출
  try {
    const posts = await postAPI.getPosts();
    //성공했을 때
    dispatch({
      type: GET_POSTS_SUCCESS,
      posts,
    });
    //실패했을 때
  } catch (e) {
    dispatch({
      type: GET_POSTS_ERROR,
      error: e,
    });
  }
};

export const getPostsById = (id) => async (dispatch) => {
  dispatch({ type: GET_POSTS_BY_ID });
  try {
    const postById = await postAPI.getPostsById(id);
    dispatch({
      type: GET_POSTS_BY_ID_SUCCESS,
      postById,
    });
  } catch (e) {
    dispatch({
      type: GET_POSTS_BY_ID_ERROR,
      error: e,
    });
  }
};

//리듀서 작성
const initialState = {
  posts: reducerUtils.initial(),
  postsById: reducerUtils.initial(),
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    //posts
    case GET_POSTS:
      return {
        ...state,
        posts: reducerUtils.loading(),
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: reducerUtils.success(action.posts),
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: reducerUtils.error(action.error),
      };

    //postsById
    case GET_POSTS_BY_ID:
      return {
        ...state,
        postsById: reducerUtils.loading(),
      };
    case GET_POSTS_BY_ID_SUCCESS:
      return {
        ...state,
        postsById: reducerUtils.success(action.postById),
      };
    case GET_POSTS_BY_ID_ERROR:
      return {
        ...state,
        postsById: reducerUtils.error(action.error),
      };
    default:
      return state;
  }
}

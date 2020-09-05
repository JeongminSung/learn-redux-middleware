import { combineReducers } from "redux";
import counter from "./counter";
import posts from "./posts";

const rootReducer = combineReducers({ counter, posts });
//rootReducer에서 해당 리듀서 이름을 counter로 정의
//useSelecter에서 해당 state.counter로 조회 가능
export default rootReducer;

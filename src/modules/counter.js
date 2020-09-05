//액션타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

//액션생성
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//thunk함수
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

//초기상태
const initialState = 0;

//리듀서 (이름: counter)
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state === 0 ? state : state - 1;
    default:
      return state;
  }
}

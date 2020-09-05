/*
type은 문자열 타입
promiseCreator은 특정 파라미터를 가져와서 Promise를 만들어준다
*/
export const createPromiseThunk = (type, promiseCreator) => {
  //type을 가져와서 두 가지 액션타입 만들기
  //비구조화 할당을 통해서 액션을 추출해주기
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  //thunk를 만들어주는 함수를 만들어서 반환해주기
  return (param) => async (dispatch) => {
    //dispatch라는 파라미터를 가져와서 특정 비동기 작업을 다루는 액션이 dispatch됐음을 알리고
    dispatch({ type });
    try {
      //그리고나서 promiseCreater를 호출한 다음에 위에서 받아온 파라미터를 넣어주고
      const payload = await promiseCreator(param);
      //해당 작업이 성공했을 때는 payload라는 결과값을 넣어서 SUCCESS 액션을 dispatch해주고
      //이게 성공하면 `${type}_SUCCESS` 위에서 정의해준것처럼 앞부분 ${type}이 변화하도록
      //즉 재사용 가능하게 만들어줬다. 실패도 마찬가지!
      dispatch({
        type: SUCCESS,
        payload,
      });
    } catch (e) {
      dispatch({
        type: ERROR,
        payload: e,
        error: true,
      });
    }
  };
};

//type: createPromiseThunk에서 만든 타입과 동일
//key: 각 액션들마다 관리하는 키가 다름. 다양한 값이 될 수 있음
//세 가지 액션에 대한 리듀서를 작성해주는 함수
export const handleAsyncActions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(),
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};

export const reducerUtils = {
  initial: (data = null) => ({
    data,
    loading: false,
    error: null,
  }),
  //prevState파라미터의 기본값을 null로 해주기.
  //상황에따라 기본값을 유지하고 싶을 때 사용 가능하게
  loading: (prevState = null) => ({
    data: prevState,
    loading: true,
    error: null,
  }),
  success: (data) => ({
    data,
    loading: false,
    error: null,
  }),
  error: (error) => ({
    data: null,
    lodaing: false,
    error,
  }),
};

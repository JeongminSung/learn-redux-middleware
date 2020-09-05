//함수를 리턴하는 함수를 리턴하는 함수
const myLogger = (store) => (next) => (action) => {
  console.log(action);
  //액션을 다음 미들웨어로, 만약 다음 미들웨어가 없다면 리듀서에게 전달하겠다
  console.log("\tPrev", store.getState());
  const result = next(action);
  console.log("\tNext", store.getState());
  //container에서 dispatch됐을때 반환하는 값이 바로 result, 프로미스 반환도 가능
  return result;
};

export default myLogger;

import React from "react";
import Counter from "../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { increaseAsync, decreaseAsync } from "../modules/counter";

function CounterContainer() {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    dispatch(decreaseAsync());
  };

  return (
    <div>
      <Counter number={state} onIncrease={onIncrease} onDecrease={onDecrease} />
    </div>
  );
}

export default CounterContainer;

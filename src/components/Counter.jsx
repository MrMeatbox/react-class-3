import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div style={{ backgroundColor: theme.bgColor, color: theme.textColor }}>
      <p>The value of the counter is: {counter}</p>
      <button onClick={() => dispatch({ type: "INCREASE", payload: 10 })}>
        Increase by 10
      </button>
      <button onClick={() => dispatch({ type: "INCREASE", payload: 5 })}>
        Increase by 5
      </button>
      <button onClick={() => dispatch({ type: "DECREASE", payload: 10 })}>
        Decrease by 10
      </button>
      <button onClick={() => dispatch({ type: "DECREASE", payload: 5 })}>
        Decrease by 5
      </button>
      <button onClick={() => dispatch({ type: "RESET", payload: 900 })}>
        Reset
      </button>
    </div>
  );
};

export default Counter;

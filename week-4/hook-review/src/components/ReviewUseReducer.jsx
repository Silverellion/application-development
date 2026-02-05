import "./Review.css";
import React, { useReducer } from "react";

export const ReviewUseReducer = () => {
  function reduce(state, action) {
    switch (action.type) {
      case "increase":
        return { count: state.count + 1 };
      case "decrease":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  const [state, setState] = useReducer(reduce, { count: 0 });
  return (
    <div>
      <div className="title">useReducer:</div>
      <div>Count: {state.count}</div>
      <button onClick={() => setState({ type: "increase" })}>Increase</button>
      <button onClick={() => setState({ type: "decrease" })}>Decrease</button>
      <hr />
    </div>
  );
};

import "./Review.css";
import React from "react";
import { useState } from "react";

export const ReviewUseState = () => {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount((count) => count + 1);
  }
  return (
    <div>
      <div className="title">useState:</div>
      <div>Count: {count}</div>
      <button onClick={increaseCount}>Increase</button>
      <hr />
    </div>
  );
};

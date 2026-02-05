import "./Review.css";
import React, { useState, useCallback } from "react";

export const ReviewUseCallback = () => {
  const [count, setCount] = useState(0);
  const increase = useCallback(() => setCount((c) => c + 1), []);
  return (
    <div>
      <div className="title">useCallback:</div>
      <div>Count: {count}</div>
      <button onClick={increase}>Increase</button>
      <hr />
    </div>
  );
};

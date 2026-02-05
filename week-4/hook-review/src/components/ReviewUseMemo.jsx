import "./Review.css";
import React, { useMemo, useState } from "react";

export const ReviewUseMemo = () => {
  const [count, setCount] = useState(0);

  const calculatedValue = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += i;
    }
    return sum + count;
  }, [count]);

  return (
    <div>
      <div className="title">useMemo:</div>
      <div>Result: {calculatedValue}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <hr />
    </div>
  );
};

import React, { useState } from "react";
import "./app.css";

const App = () => {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    if(count > 0)
      setCount(count - 1)
    else
      alert("Count cannot decrease below 0")
  }

  return (
    <>
      <button onClick={increaseCount} className="sample-button">
        +
      </button>
      <button onClick={decreaseCount} className="sample-button">
        -
      </button>
      <div className={count > 10 ? "counter-red" : "counter"}>
        Count: {count}
      </div>
    </>
  );
};

export default App;

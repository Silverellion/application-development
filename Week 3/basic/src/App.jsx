import React, { useState } from "react";
import "./app.css";

const App = () => {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={updateCount} className="sample-button">
        Click
      </button>
      <div className="counter">
        Count: {count}
      </div>
    </>
  );
};

export default App;

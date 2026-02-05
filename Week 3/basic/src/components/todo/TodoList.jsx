import React, { useState } from "react";

export const TodoList = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  function addTodo() {
    if (input.trim() === "") return;
    else {
      setTodo([...todo, input]);
      setInput("");
    }
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={addTodo} Add></button>
    </div>
  );
};

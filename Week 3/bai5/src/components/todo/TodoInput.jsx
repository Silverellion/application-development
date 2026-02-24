import React from "react";
import { useState } from "react";

export const TodoInput = ({ addTodo }) => {
  const [context, setContext] = useState("");
  const handleAdd = () => {
    if (context === "") return;
    addTodo(context);
    setContext("");
  };
  return (
    <div>
      <input
        type="text"
        value={context}
        onChange={(e) => setContext(e.target.value)}
      />
      <button className="add-button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

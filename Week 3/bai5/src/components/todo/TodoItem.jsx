import React from "react";

export const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div>
      <span>{todo.text}</span>
      <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
};

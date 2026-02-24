import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

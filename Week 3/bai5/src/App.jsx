import React, { useState } from "react";
import "./App.css";
import { TodoInput } from "./components/todo/TodoInput";
import { TodoList } from "./components/todo/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const newList = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id !== id) {
        newList.push(todos[i]);
      }
    }
    setTodos(newList);
  };

  return (
    <div>
      <h1>Todo list</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;

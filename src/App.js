//App.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./App.css"; // Import the CSS file

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("/api/todos").then((res) => setTodos(res.data));
  }, []);

  const handleAdd = (text) => {
    axios.post("/api/todos", { text }).then((res) => setTodos([...todos, res.data]));
  };

  const handleDelete = (id) => {
    axios.delete(`/api/todos/${id}`).then(() => setTodos(todos.filter((todo) => todo.id !== id)));
  };

  return (<div className="App">
  <header className="App-header">
    <h1>To-do List</h1>
  </header>
  <main>
    <TodoForm onAdd={handleAdd} />
    <TodoList todos={todos} onDelete={handleDelete} />
  </main>
</div>
);
}

export default App;
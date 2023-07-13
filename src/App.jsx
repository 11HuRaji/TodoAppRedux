import React, { useState, useEffect } from "react";
import { TodoForm, TodoList } from "./components";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [fTodos, setFTodos] = useState([]);

  const handleFilter = () => {
    if (status === "completed") {
      setFTodos(todos.filter((todo) => todo.completed == true));
    } else if (status === "uncompleted") {
      setFTodos(todos.filter((todo) => todo.completed == false));
    } else {
      setFTodos(todos);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [status, todos]);

  return (
    <>
      <TodoForm
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList todos={fTodos} setTodos={setTodos} />
    </>
  );
}

export default App;

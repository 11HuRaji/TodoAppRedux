import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../action-creators";
import { bindActionCreators } from "redux";

function TodoForm() {
  const [inputText, setInputText] = useState("");
  const { addTodo, changeStatus } = bindActionCreators(
    actionCreators,
    useDispatch()
  );

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(inputText);
    setInputText("");
  }

  function handleStatus(e) {
    changeStatus(e.target.value);
  }
  return (
    <>
      <div>
        <header>Todo List</header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="todo-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit" className="todo-button">
            Add
          </button>
          <div className="select">
            <select
              name="todos"
              className="filter-todo"
              onChange={handleStatus}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
}

export default TodoForm;

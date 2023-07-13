import { TodoItem } from "..";
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);

  const handleFilter = (todos, status) => {
    if (status === "completed") {
      return todos.filter((todo) => todo.completed == true);
    } else if (status === "uncompleted") {
      return todos.filter((todo) => todo.completed == false);
    } else {
      return todos;
    }
  };

  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {handleFilter(todos, status).map((todo, i) => (
            <TodoItem key={i} id={i} todo={todo} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;

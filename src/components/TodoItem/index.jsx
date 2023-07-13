import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../action-creators";

function TodoItem({ id , todo }) {
  const { deleteTodo, toggleComplete } = bindActionCreators(
    actionCreators,
    useDispatch()
  );

  return (
    <>
      <li className="todo">
        <span className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {todo.text}
        </span>
        <button className="trash-btn" onClick={() => deleteTodo(id )}>
          Delete
        </button>
        <button className="complete-btn" onClick={() => toggleComplete(id )}>
          Complete
        </button>
      </li>
    </>
  );
}

export default TodoItem;

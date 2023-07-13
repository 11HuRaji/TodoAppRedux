const initialState = {
  status: "all",
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "change-status":
      return { ...state, status: action.payload };
    case "add-todo":
      return { ...state, todos: [...state.todos, action.payload] };
    case "toggle-complete":
      const todo = state.todos[action.payload];
      todo.completed = !todo.completed;
      return { ...state, todos: [...state.todos] };
    case "delete-todo":
      const remainingTodos = state.todos.filter((_, i) => i !== action.payload);
      return { ...state, todos: [...remainingTodos] };
    default:
      return state;
  }
};

export default todoReducer;

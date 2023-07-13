export const addTodo = (todoText) => {
  const payload = {
    text: todoText,
    completed: false,
  };
  return (dispatch) => {
    dispatch({
      type: "add-todo",
      payload: payload,
    });
  };
};

export const changeStatus = (status) => {
  return (dispatch) => {
    dispatch({
      type: "change-status",
      payload: status,
    });
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: "delete-todo",
      payload: id,
    });
  };
};

export const toggleComplete = (id) => {
  return (dispatch) => {
    dispatch({
      type: "toggle-complete",
      payload: id,
    });
  };
};

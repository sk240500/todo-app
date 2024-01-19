import React, { createContext, useContext, useReducer } from "react";

const TaskContext = createContext();

export const useTaskContext = () => {
  return useContext(TaskContext);
};

const initialState = {
  tasks: [],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((_, i) => i !== action.payload),
      };
    case "TOGGLE_COMPLETION":
      return {
        ...state,
        tasks: state.tasks.map((task, i) =>
          i === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task, i) =>
          i === action.payload.index ? action.payload.editedTask : task
        ),
      };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = (newTask) => {
    dispatch({ type: "ADD_TASK", payload: newTask });
  };

  const deleteTask = (index) => {
    dispatch({ type: "DELETE_TASK", payload: index });
  };

  const toggleCompletion = (index) => {
    dispatch({ type: "TOGGLE_COMPLETION", payload: index });
  };

  const editTask = (index, editedTask) => {
    dispatch({ type: "EDIT_TASK", payload: { index, editedTask } });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        deleteTask,
        toggleCompletion,
        editTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

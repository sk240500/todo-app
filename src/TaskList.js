import React from "react";
import Task from "./Task";
import "./TaskList.css";

function TaskList({ tasks, deleteTask, toggleCompletion, editTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
          toggleCompletion={toggleCompletion}
          editTask={editTask} // Pass the editTask function to Task
        />
      ))}
    </ul>
  );
}

export default TaskList;

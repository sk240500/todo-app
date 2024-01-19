import React, { useState, useEffect } from "react";
import "./Task.css";

function Task({ task, index, deleteTask, toggleCompletion, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  useEffect(() => {
    setEditedTask({ ...task });
  }, [task]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleEditSave = () => {
    editTask(index, editedTask);
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed || false}
        onChange={() => toggleCompletion(index)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            value={editedTask.description}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="dueDate" // Add dueDate field
            value={editedTask.dueDate}
            onChange={handleInputChange}
          />
          <button onClick={handleEditSave}>Save</button>
        </>
      ) : (
        <>
          <div style={{ margin: "5px" }}>
            <strong>{task.title}</strong> - {task.description}
            {task.dueDate && <span> <br /> Due: {task.dueDate}</span>}
          </div>
          <div style={{ margin: "5px" }}>
            <button onClick={() => deleteTask(index)}>🗑️ Delete</button>
            <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
          </div>
        </>
      )}
    </li>
  );
}

export default Task;

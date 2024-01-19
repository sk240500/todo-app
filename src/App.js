import React, { useState } from "react";
import "./App.css";
import TaskList from "./TaskList";
import Header from "./Header";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [filter, setFilter] = useState("All");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const addTask = () => {
    if (
      newTask.title.trim() !== "" &&
      newTask.description.trim() !== "" &&
      newTask.dueDate.trim() !== "" // Ensure a due date is provided
    ) {
      setTasks((prevTasks) => [newTask, ...prevTasks]);
      setNewTask({ title: "", description: "", dueDate: "" });
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const editTask = (index, editedTask) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? editedTask : task
    );
    setTasks(updatedTasks);
  };

  const filterTasks = (status) => {
    setFilter(status);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") {
      return true;
    } else if (filter === "Completed") {
      return task.completed;
    } else if (filter === "Pending") {
      return !task.completed;
    }
    return false;
  });

  return (
    <div className="App">
      <Header />
      <div className="form">
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newTask.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={newTask.dueDate}
            onChange={handleInputChange}
          />
        </div>
        <button className="task-button" onClick={addTask}>Add Task</button>
      </div>
      <div className="filter">
        <button className="filter-button" onClick={() => filterTasks("All")}>All</button>
        <button className="filter-button" onClick={() => filterTasks("Completed")}>Completed</button>
        <button className="filter-button" onClick={() => filterTasks("Pending")}>Pending</button>
      </div>

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleCompletion={toggleCompletion}
        editTask={editTask}
      />
    </div>
  );
}

export default App;

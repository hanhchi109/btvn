import React, { useState, useEffect } from "react";
import All from "./Components/all";
import Active from "./Components/Active";
import Completed from "./Components/Complete";
import './App.css'; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("All");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), content: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleToggleTask = (id) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleDeleteAllTasks = () => {
    setTasks([]);
  };

  let filteredTasks;
  if (currentFilter === "All") {
    filteredTasks = tasks;
  } else if (currentFilter === "Active") {
    filteredTasks = tasks.filter((task) => !task.completed);
  } else if (currentFilter === "Completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  }


  return (
    <div>
      <h1>Todo List</h1>
      
      <div>
        <button onClick={() => setCurrentFilter("All")}>All</button>
        <button onClick={() => setCurrentFilter("Active")}>Active</button>
        <button onClick={() => setCurrentFilter("Completed")}>Completed</button>
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTask}> Add Task </button>
      </div>
      <div>
      {currentFilter === "All" && <All tasks={filteredTasks} handleToggleTask={handleToggleTask} handleDeleteTask={handleDeleteTask} />}
      {currentFilter === "Active" && <Active tasks={filteredTasks} handleToggleTask={handleToggleTask} handleDeleteTask={handleDeleteTask} />}
      {currentFilter === "Completed" && <Completed tasks={filteredTasks} handleToggleTask={handleToggleTask} handleDeleteTask={handleDeleteTask} />}
      {tasks.length > 0 && (
        <div>
          <button className = 'delete-btn' onClick={handleDeleteAllTasks}>Delete All Tasks</button>
        </div>
        
      )}
      
      </div>
      
    </div>
  );
}

export default App;
import React from "react";


function All({ tasks, handleToggleTask, handleDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggleTask(task.id)}
          />
          <span
            className={`task-content ${task.completed ? "completed" : ""}`}
          >
            {task.content}
          </span>
          <button button className = 'delete-btn' onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default All;


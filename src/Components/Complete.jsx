import React from "react";

function Completed({ tasks, handleToggleTask, handleDeleteTask }) {
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <ul>
      {completedTasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggleTask(task.id)}
          />
          <span style={{ textDecoration: "line-through" }}> {task.content} </span>
          <button className="delete-btn" onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default Completed;

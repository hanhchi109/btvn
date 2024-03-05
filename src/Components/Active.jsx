import React from "react";

function ActiveTasks({ tasks, handleToggleTask, handleDeleteTask }) {
  const activeTasks = tasks.filter((task) => !task.completed);

  return (
    <ul>
      {activeTasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggleTask(task.id)}
          />
          <span>{task.content}</span>
          <button className = 'delete-btn' onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ActiveTasks;

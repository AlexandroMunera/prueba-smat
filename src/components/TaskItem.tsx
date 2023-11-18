import React from "react";

export const TaskItem = ({
  task,
  handleCompleteTask,
  handleIncompleteTask,
}) => {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.state === "completed"}
        onChange={(e) => {
          if (task.state === "completed") {
            handleIncompleteTask(task.id);
          } else {
            handleCompleteTask(task.id);
          }
        }}
      />
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <span className="task-state">{task.state}</span>
    </div>
  );
};

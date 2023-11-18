import React from "react";
import { TaskItem } from "./TaskItem";

const TaskList = ({
  tasks,
  handleCompleteTask,
  handleIncompleteTask,
  selectedState,
}) => {
  const filteredTasks = tasks.filter((task) => {
    if (selectedState === "all") return true;
    else return task.state === selectedState;
  });
  return (
    <ul className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleCompleteTask={handleCompleteTask}
          handleIncompleteTask={handleIncompleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;

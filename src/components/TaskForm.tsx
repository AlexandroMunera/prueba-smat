import React, { useState } from "react";

const TaskForm = ({ handleAddTask }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState("incomplete");
  const [dueDate, setDueDate] = useState("2023-11-20");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: new Date().getTime(),
      name,
      description,
      state,
      dueDate,
    };

    handleAddTask(newTask);

    setName("");
    setDescription("");
    setState("incomplete");
    setDueDate("2023-11-20");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <label htmlFor="task-name">Name:</label>
      <input
        type="text"
        id="task-name"
        name="task-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="task-description">Description:</label>
      <textarea
        id="task-description"
        name="task-description"
        rows={5}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label htmlFor="task-state">State:</label>
      <select
        id="task-state"
        name="task-state"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value="incomplete">Incomplete</option>

        <option value="in-progress">In Progress</option>

        <option value="completed">Completed</option>
      </select>

      <label htmlFor="task-due-date">Due Date:</label>
      <input
        type="date"
        id="task-due-date"
        name="task-due-date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;

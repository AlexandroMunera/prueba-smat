import { useState } from "react";
import TaskList from "./components/TaskList";
import "./App.css";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedState, setSelectedState] = useState("all");

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, state: "completed" };
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  };

  const handleIncompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, state: "incomplete" };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  const handleFilterChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div className="container">
      <h1>Tasks App</h1>
      <label htmlFor="filter-state">Filter Tasks by State:</label>
      <select
        id="filter-state"
        name="filter-state"
        value={selectedState}
        onChange={handleFilterChange}
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>

        <option value="in-progress">In Progress</option>

        <option value="completed">Completed</option>
      </select>

      <TaskForm handleAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        handleCompleteTask={handleCompleteTask}
        handleIncompleteTask={handleIncompleteTask}
        selectedState={selectedState}
      />
    </div>
  );
}

export default App;

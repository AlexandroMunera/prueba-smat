import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

const API_URL = "https://655cfda125b76d9884fe4072.mockapi.io/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedState, setSelectedState] = useState("all");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((response) => setTasks(response));
  }, []);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleCompleteTask = async (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, nameCategory: "completed" };
      } else {
        return task;
      }
    });
    
    setTasks(updatedTasks);


    // try {
    //   const response = await fetch(`${API_URL}1`, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(updatedTasks),
    //   });

    //   const result = await response.json();
    //   console.log("Success:", result);
    //   // setTasks(updatedTasks);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  const handleIncompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, nameCategory: "incomplete" };
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

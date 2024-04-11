import { useState } from "react";
import deleteTask from "../services/deleteTask";
import moveTaskUp from "../services/moveTaskUp";
import moveTaskDown from "../services/moveTaskDown";
import addTask from "../services/addTask";

const ToDo = () => {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "take a shower",
    "walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDo;

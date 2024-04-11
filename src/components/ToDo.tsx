import { useDebugValue, useState } from "react";

const ToDo = () => {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "take a shower",
    "walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((task) => [...task, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (task: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== task);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (task: number) => {
    if (task > 0) {
      const updetedTasks = [...tasks];
      [updetedTasks[task], updetedTasks[task - 1]] = [
        updetedTasks[task - 1],
        updetedTasks[task],
      ];
      setTasks(updetedTasks);
    }
  };
  const moveTaskDown = (task: number) => {
    if (task < tasks.length - 1) {
      const updetedTasks = [...tasks];
      [updetedTasks[task], updetedTasks[task + 1]] = [
        updetedTasks[task + 1],
        updetedTasks[task],
      ];
      setTasks(updetedTasks);
    }
  };

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

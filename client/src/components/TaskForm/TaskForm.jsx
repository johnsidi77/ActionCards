import "./TaskForm.css";
import { useState } from "react";

function TaskForm({ createHandler }) {
  const [task, setTask] = useState({ title: "", startDate: "" });

  const submitHandler = async (e) => {
    e.preventDefault();
    await createHandler(task);
    setTask({ title: "", startDate: "" });
  };

  console.log("task", task);
  
  function selectTasks () {
    
  }

  return (
    <div className="form">
      <h3>Create a new task</h3>
      <form onSubmit={submitHandler}>
        <label>Description</label>
        <input
          required
          onChange={(e) => {
            setTask({ ...task, title: e.target.value });
          }}
          value={task.title}
          type="text"
        />
        <br />

        <label>Start Date</label>
        <input
          required
          onChange={(e) => {
            setTask({ ...task, startDate: e.target.value });
          }}
          value={task.startDate}
          type="datetime-local"
        />
        <br />

        <button type="submit">Create</button>
      </form>
      <button onClick={selectTasks}>Print tasks</button>
    </div>
  );
}

export default TaskForm;

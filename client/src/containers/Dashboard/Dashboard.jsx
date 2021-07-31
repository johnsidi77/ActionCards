import { useEffect, useState } from "react";
import ApiService from "../../ApiService";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList.jsx";
import { usePDF, BlobProvider, PDFViewer } from "@react-pdf/renderer";
import IndexCard3by5 from "../../components/IndexCard3-5/IndexCard3-5";
import "./Dashboard.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  async function fetchTasks() {
    const tasksList = await ApiService.getTasks();
    setTasks(tasksList);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  const createHandler = async (taskMetadata) => {
    const task = await ApiService.createTask(taskMetadata);
    console.log("after mongoose", task);
    setTasks((prevState) => [...prevState, task]);
  };
  console.log("tasks", tasks);
  // const taskForPrinting = tasks;
  return (
    <div className="dashboard">
      <div className="tasks">
        <TaskList id="list" tasks={tasks} />
      </div>

      <div className="form">
        <TaskForm createHandler={createHandler} />
        <div className="indexCard">
          {tasks.length ? <IndexCard3by5 tasks={tasks} /> : null}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

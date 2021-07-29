import {useEffect, useState} from 'react';
import ApiService from '../../ApiService'
import TaskForm from '../../components/TaskForm/TaskForm'
import TaskList from '../../components/TaskList/TaskList.jsx';
import './Dashboard.css'

function Dashboard () {
  const [tasks, setTasks] = useState([]);
  
  async function fetchTasks () {
    const tasksList = await ApiService.getTasks();
    setTasks(tasksList);  
  }
  
  useEffect(()=> {
    fetchTasks();
  }, [])
  
  const createHandler = async (taskMetadata) => {
    const task = await ApiService.createTask(taskMetadata);
    console.log('after mongoose', task);
    setTasks(prevState => [...prevState, task])
  }
return (
  <div className="dashboard">
    <div className="tasks">
      <TaskList id='list' tasks={tasks} />
    </div>
    <div className="form">
      <TaskForm createHandler = {createHandler}/>
    </div>
  </div>
);




}

export default Dashboard;


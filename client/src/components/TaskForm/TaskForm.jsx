import './TaskForm.css'
import {useState} from 'react';

function TaskForm( {createHandler}) {
  const [task, setTask] = useState({title: '', startDate: ''});
  
  const submitHandler = async (e) => {
    e.preventDefault();
    await createHandler(task);
    setTask({title: '', startDate: ''})
  }
  
  console.log('task', task)
  
  return (
    <div className="form">
      <h3>Create a new task</h3>
      <form onSubmit={submitHandler}>
        <label>TITLE</label>
        <input
          required
          onChange = {(e) => {setTask({...task, title:e.target.value})}}
          value = {task.title}
          type="text" /><br/>
          
        <label>DATE</label>
        <input
          required
          onChange = {(e) => {setTask({...task, startDate:e.target.value})}}
          value = {task.startDate}
          type= "datetime-local" /><br/>
          
          <button type="submit">Create</button>  
      </form>
    </div>
  )
}

export default TaskForm;
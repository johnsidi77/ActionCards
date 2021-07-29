import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';

function TaskList ({ tasks }) {



  return (
    tasks.map(task => <TaskItem  key={task._id} task = {task}/> )
  )
}

export default TaskList;
import './TaskItem.css'

function TaskItem ({ task }) {
  return (
    <div className="taskContent">
      <div className="title"><h3>{task.title}</h3>
      </div>
    </div>
  )
}

export default TaskItem;
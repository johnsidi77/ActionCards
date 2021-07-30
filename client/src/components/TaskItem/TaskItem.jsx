import "./TaskItem.css";

function TaskItem({ task }) {
  return (
    <div className="taskContent">
      <div className="title">
        <input type="checkbox" id={task._id} className="printCheckbox"></input>
        <h3>{task.title}</h3>
      </div>
    </div>
  );
}

export default TaskItem;

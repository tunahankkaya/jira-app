import TaskShow from "./TaskShow";
import "./task.css";

function TaskList({tasks}) {
    return (
    <div className="task-list">
        {tasks.map((task) => {
            return <TaskShow key={task.id} task = {task} />
        })}
    </div>
    )
}

export default TaskList;
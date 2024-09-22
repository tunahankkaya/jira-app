import { useState } from "react";
import "./task.css";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleUpdateClick = () => {
    setShowEdit(true);
  };
const handleSubmit = (id, updatedTitle, updatedTaskDec) => {
  setShowEdit(false);
  onUpdate(id,updatedTitle,updatedTaskDec);
};

  return (
    <div className="task-card">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate = {true} onUpdate={handleSubmit} ></TaskCreate>
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="btn-delete" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="btn-update" onClick={handleUpdateClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;

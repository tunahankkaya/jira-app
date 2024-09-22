import { useState } from "react";
import "./task.css";

function TaskCreate({ onCreate,taskformUpdate, task, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(taskformUpdate){
      onUpdate(task.id,title, taskDesc);
    }
    else{
      onCreate(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };

  

  return (
    <div>
      {" "}
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Lütfen Taskı Düzenleyiniz</h3>
          <form className="task-form">
            <label>Başlık</label>
            <input value={title} onChange={handleTitleChange} />

            <label>Task Güncelleme</label>
            <textarea rows={5} value={taskDesc} onChange={handleTaskChange} />
              <button onClick={handleSubmit}>Onayla</button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz</h3>
          <form className="task-form">
            <label>Başlık</label>
            <input value={title} onChange={handleTitleChange} />

            <label>Açıklama</label>
            <textarea rows={5} value={taskDesc} onChange={handleTaskChange} />
            <button onClick={handleSubmit}>Oluştur</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;

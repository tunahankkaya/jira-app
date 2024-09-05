import { useState } from 'react';
import './task.css';

function TaskCreate({onCreate}) {

  const [title, setTitle] = useState("")
  const [taskDesc, setTaskDesc] = useState("")

  const handleTitleChange = (event) => {
    setTitle(event.target.value);

  }

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  }

   const handleSubmit = (event)=>{
     event.preventDefault();
     onCreate(title, taskDesc)
    setTitle("");
    setTaskDesc("");
    }

    return ( <div className='task-create'>
      <h3>Lütfen Task Ekleyiniz</h3>
      <form className='task-form'>
        <label>Başlık</label>
        <input value={title} onChange={handleTitleChange}/>

        <label>Açıklama</label>
        <textarea rows={5} value={taskDesc} onChange={handleTaskChange}/>
        <button onClick={handleSubmit}>Oluştur</button>
      </form>
    </div>
   );
}

export default TaskCreate;
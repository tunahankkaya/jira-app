import "./task.css";

function TaskShow({task}) {
    
    const handleDeleteClick = () => {
        onDelete(task.id)
    }
    
    return (  
    <div className="task-card">
        <h3 className="task-title">Göreviniz</h3>
        <p>{task.title}</p>
        <h3 className="task-title">Yapılacaklar</h3>
        <p>{task.taskDesc}</p>
        <div>
            <button className="btn-delete" onClick={handleDeleteClick}>Sil</button>
            <button className="btn-update">Güncelle</button>
        </div>
    </div>);
}

export default TaskShow
;
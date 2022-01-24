import React, {useState} from 'react';

function TodoItem({value: todo, onDelete, onComplete, onEdit}) {
    let [isEditing, setEditing] = useState(false)
    let [title, setTitle] = useState(todo.title)
    let classNames = `list-group-item ${todo.completed ? 'bg-success' : ''}`
    const handleKeyUp = e => {
        if (e.key === "Enter") {
            setEditing(false)
            onEdit(todo.id,title)
        }
    }
    return (
        <li className={classNames}>
            <div className="d-flex justify-content-between">
                <input type="checkbox" onChange={e => onComplete(todo.id)} checked={todo.completed}/>
                {!isEditing ? <span style={{width: '100%', textAlign: 'center'}}
                                    onDoubleClick={e => setEditing(true)}>{todo.title}</span> : null}
                {isEditing ? <input value={title} onChange={e=>setTitle(e.target.value)} onKeyUp={e => handleKeyUp(e)}/> : null}
                <button onClick={e => onDelete(todo.id)} className="btn btn-sm btn-danger">delete</button>
            </div>
        </li>
    );
}

export default TodoItem;
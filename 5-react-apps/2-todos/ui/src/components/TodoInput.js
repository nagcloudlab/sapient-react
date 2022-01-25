import React,{useState} from 'react';

function TodoInput({onSubmit}) {
    const [title,setTitle]=useState('')
    const handleKeyUp = e => {
        if (e.key === "Enter") {
            onSubmit(title)
            setTitle("")
        }
    }
    return (
        <div>
            <div className="alert alert-dark">
                <div className="d-flex justify-content-center">
                    <input
                        value={title}
                        onChange={e=>setTitle(e.target.value)} className="input lg"
                        onKeyUp={e=>handleKeyUp(e)}
                    />
                </div>
            </div>
        </div>
    );
}

export default TodoInput;
import React, { useState, useEffect } from 'react'

function Hit(props) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `hit-count ${count}`
    })
    return (
        <div className='alert alert-danger'>
            <button className='btn btn-dark' onClick={e => setCount(count + 1)}>hit- {count}</button>
        </div>
    )
}

export default Hit;
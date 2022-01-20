import React, { useState, useEffect } from 'react';


function Ex({ title }) {

    const [resource, setResource] = useState('posts')
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
            .then(response => response.json())
            .then(responseItems => {
                setItems(responseItems) // state change -> trigger-re-render
            })
    }, [resource])


    return (
        <div className='card'>
            <div className='card-header'>{title}</div>
            <div className='card-body'>
                <div className='d-flex justify-content-around'>
                    <button onClick={e => setResource('posts')} className='btn btn-primary'>posts</button>
                    <button onClick={e => setResource('todos')} className='btn btn-primary'>todos</button>
                    <button onClick={e => setResource('users')} className='btn btn-primary'>users</button>
                </div>
                <hr />
                resource:{resource}
                <hr />

                {
                    items.map(item => (
                        <pre>
                            {JSON.stringify(item)}
                        </pre>
                    ))
                }

            </div>
        </div>
    );
}

export default Ex;
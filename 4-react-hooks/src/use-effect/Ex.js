import React, { useState, useEffect } from 'react';


function Ex({ title }) {

    const [resource, setResource] = useState('posts')
    const [items, setItems] = useState([])


    // effect will extecute on every render
    // useEffect(() => {
    //     console.log("useffect()");
    // })

    // effect will extecute on intial render
    // useEffect(() => {
    //     console.log("useEffect");
    // }, [])

    // effect will extecute on dependency change
    // useEffect(() => {
    //     fetch("http://jsonplaceholder.typicode.com/" + resource)
    //         .then(response => response.json())
    //         .then(items => {
    //             setItems(items)
    //         })
    // }, [resource])

    useEffect(() => {
        console.log("didMount/Update");
        return () => {
            console.log("willUnmount");
        }
    })


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
                    items.map((item, idx) => (
                        <pre key={idx}>
                            {JSON.stringify(item)}
                        </pre>
                    ))
                }

            </div>
        </div>
    );
}

export default Ex;
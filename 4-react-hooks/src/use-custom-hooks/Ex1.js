import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './my-hooks'


function Ex1(props) {

    // const [name, setName] = useState(() => {
    //     return localStorage.getItem('name') || ""
    // })
    // useEffect(() => {
    //     localStorage.setItem('name', name)
    // }, [name])

    const [name, setName] = useLocalStorage('name')

    return (
        <div className='card'>
            <div className='card-header'>{"Ex1"}</div>
            <div className='card-body'>
                <div className='d-flex justify-content-around'>
                    Hello , {name}
                </div>
                <hr />
                <input onChange={e => setName(e.target.value)} />
            </div>
        </div>
    );
}

export default Ex1;
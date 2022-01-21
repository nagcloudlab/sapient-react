import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './my-hooks'


function Ex2(props) {
    // const [token, setToken] = useState(() => {
    //     return localStorage.getItem('auth-token') || ""
    // })
    // useEffect(() => {
    //     localStorage.setItem('auth-token', token)
    // }, [token])

    const [token, setToken] = useLocalStorage('auth-token')

    return (
        <div className='card'>
            <div className='card-header'>{"Ex2"}</div>
            <div className='card-body'>
                <div className='d-flex justify-content-around'>
                    auth-token , {token}
                </div>
                <hr />
                <button onClick={e => setToken("6df5867sd4fsd5f48sd65f4sd67f")}>do Login</button>
            </div>
        </div>
    );
}

export default Ex2;
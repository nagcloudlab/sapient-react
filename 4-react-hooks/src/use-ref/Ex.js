import React, { useState, useRef, useEffect } from 'react';

function Ex({ title }) {
    const [name, setName] = useState('')
    // const [renderCount, setRenderCount] = useState(1)
    const renderCountRef = useRef(1)
    const prevNameRef = useRef()
    const inpFieldRef = useRef()

    useEffect(() => {
        // imp- : will not cause comp to re-render
        renderCountRef.current = renderCountRef.current + 1
    })

    useEffect(() => {
        // imp- : will not cause comp to re-render
        prevNameRef.current = name
    }, [name])

    const handleFocus = e => {
        // console.log(inpFieldRef.current);
        inpFieldRef.current.focus()
    }

    return (
        <div className='card'>
            <div className='card-header'>{title}</div>
            <div className='card-body'>
                <button onClick={handleFocus}>focus name field</button>
                <hr />
                <div className='d-flex justify-content-around'>
                    <input ref={inpFieldRef} onChange={e => setName(e.target.value)} />
                    Prev-Name : {prevNameRef.current} , Curr-Name: {name}
                </div>
                <hr />
                render count : {renderCountRef.current}
            </div>
        </div>
    );
}

export default Ex;
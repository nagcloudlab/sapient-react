import React, { useEffect, useRef, useState } from 'react';

function Ex2(props) {

    console.log("Ex2-render()");

    const [count, setCount] = useState(0)
    const ref = useRef(0)

    useEffect(() => {
        ref.current = count
    }, [count])

    return (
        <div className='container'>
            <button className='btn btn-dark' onClick={e => setCount(count + 1)}>
                {ref.current} -   {count}
            </button>
        </div>
    );
}

export default Ex2;
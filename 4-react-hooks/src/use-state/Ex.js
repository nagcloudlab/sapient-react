import React, { useState } from 'react';

function Ex({ title }) {

    console.log("Ex:render()");

    //---------------------------------------------------------------------------

    // const [likeCount, setLikeCount] = useState(0)
    // const [dislikeCount, setDislikeCount] = useState(0)

    // const [votes, setVotes] = useState({ likes: 1, dislikes: 2 })

    //---------------------------------------------------------------------------

    // let [count, setCount] = useState(0)

    // const handleIncrement = () => {
    //     setCount(count + 1)
    // }
    // const handleIncrementFiveTimes = () => {

    //     // for (let i = 0; i < 5; i++) {
    //     //     count += 1
    //     // }
    //     // setCount(count)

    //     for (let i = 0; i < 5; i++) {
    //         setCount(c => c + 1) // trigger re-render
    //     }
    // }
    //---------------------------------------------------------------------------

    const [value, setValue] = useState(() => {
        // compute intial value
        console.log("computing initial value");
        return 10
    })


    return (
        <div className='card'>
            <div className='card-header'>{title}</div>
            <div className='card-body'>
                <div className='d-flex justify-content-around'>
                    <div className='display-3'>{value}</div>
                    <button className='btn btn-primary' onClick={e => setValue(100)}>set new value</button>
                </div>
            </div>
        </div>
    );
}

export default Ex;
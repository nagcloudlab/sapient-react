import React, {useState} from 'react';

function Counter(props) {
    const [count,setCount]=useState(0)
    const [stepCount,setStepCount]=useState(1)
    return (
        <div data-testid={"root"}>
            <div data-testid={"title"}
                 className={"display-1"}>
                Counter App
            </div>
            <div style={{
                width:'50px',
                height:'50px',
                borderRadius:'50%',
                border:'1px solid dark',
                backgroundColor:'tomato'
            }}
            data-testid={"count"}
            >
                {count}
            </div>

            <div>
                <button className={"btn btn-danger"}
                        data-testid={"sub-btn"}
                        onClick={e=>setCount(count-stepCount)}
                >
                    -
                </button>
                <input
                    data-testid={"input"}
                    value={stepCount}
                    type={"number"}
                    onChange={e=>setStepCount(Number.parseInt(e.target.value))}
                />
                <button className={"btn btn-success"}
                        data-testid={"add-btn"}
                        onClick={e=>setCount(count+stepCount)}
                >
                    +
                </button>
            </div>

        </div>
    );
}

export default Counter;
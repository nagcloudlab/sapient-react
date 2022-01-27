import React from 'react';

import {useSelector} from 'react-redux'

function CounterHead({title}) {
    const count=useSelector(state=>state.counter.count)
    return (
        <div className={"alert alert-dark"}>
            <div data-testid={"title"}>
                Counter - {count}
            </div>
        </div>
    );
}

export default CounterHead;
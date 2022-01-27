import React from 'react';

function CounterFooter({value}) {
    return (
        <div className={"alert alert-danger"}>
            <div data-testid={"count"} className={"display-6"}>
                {value}
                <br/>
                <button className={"btn btn-warning"}>reset</button>
            </div>
        </div>
    );
}

export default CounterFooter;
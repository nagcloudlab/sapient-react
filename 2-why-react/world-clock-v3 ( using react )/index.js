
//-------------------------------------------
// using DOM & Timer API
//-------------------------------------------

const clocl1Ele = document.getElementById('clock-1')
const clocl2Ele = document.getElementById('clock-2')
const clocl3Ele = document.getElementById('clock-3')


// ------------------------------------------------
// UI with component based arch
// ------------------------------------------------

// principle#1 : single-responsibility  
// principle#2 : loosely-coupled from other componet
// principle#3 : customizable via props / input / attributes ( optional )

// JSX ( JavaScript eXtension => template syntax for components)
function Clock(props) {
    const { timeZone } = props
    return (
        <div className="card">
            <div className="card-body bg-warning">
                <h5 className="card-title">{timeZone}</h5>
                <p className="card-text">
                    <span className="badge bg-danger">{new Date().toLocaleTimeString('en-US', { timeZone })}</span>
                </p>
            </div>
        </div>
    )
}

function Board(props) {
    return (
        <div className="card">
            <div className="card-header">clocks</div>
            <div className="card-body bg-dark">
                <div className="row">
                    <div id="clock-1" className="col-4">
                        <Clock timeZone="Asia/Kolkata" />
                    </div>
                    <div id="clock-2" className="col-4">
                        <Clock timeZone="Asia/Dubai" />
                    </div>
                    <div id="clock-3" className="col-4">
                        <Clock timeZone="America/New_york" />
                    </div>
                </div>
            </div>
        </div>
    )
}

setInterval(() => {
    ReactDOM.render(<Board />, document.getElementById('root'))
}, 1000)
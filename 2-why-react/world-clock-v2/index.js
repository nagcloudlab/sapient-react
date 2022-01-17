
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

function Clock(props) {
    const { timeZone } = props
    return `
    <div class="card">
        <div class="card-body bg-warning">
            <h5 class="card-title">${timeZone}</h5>
            <p class="card-text">
                <span class="badge bg-danger">${new Date().toLocaleTimeString('en-US', { timeZone })}</span>
            </p>
        </div>
    </div>
    `
}

setInterval(() => {
    clocl1Ele.innerHTML = Clock({ timeZone: 'Asia/Kolkata' })
    clocl2Ele.innerHTML = Clock({ timeZone: 'Asia/Dubai' })
    clocl3Ele.innerHTML = Clock({ timeZone: 'America/New_york' })
}, 1000);
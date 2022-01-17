
//-------------------------------------------
// using DOM & Timer API
//-------------------------------------------

const clocl1Ele = document.getElementById('clock-1')
const clocl2Ele = document.getElementById('clock-2')
const clocl3Ele = document.getElementById('clock-3')

setInterval(() => {

    clocl1Ele.innerHTML = `

    <div class="card">
    <div class="card-body bg-warning">
        <h5 class="card-title">Asia/Kolkata</h5>
        <p class="card-text">
            <span class="badge bg-danger">${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}</span>
        </p>
    </div>
    </div>

    `;


    clocl2Ele.innerHTML = `

    <div class="card">
    <div class="card-body bg-warning">
        <h5 class="card-title">Asia/Dubai</h5>
        <p class="card-text">
            <span class="badge bg-danger">${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai' })}</span>
        </p>
    </div>
    </div>

`;


    clocl3Ele.innerHTML = `

    <div class="card">
    <div class="card-body bg-warning">
        <h5 class="card-title">America/New_york</h5>
        <p class="card-text">
            <span class="badge bg-danger">${new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_york' })}</span>
        </p>
    </div>
    </div>

    `;

}, 1000)


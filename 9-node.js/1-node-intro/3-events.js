const events = require('events')
const EventEmitter = events.EventEmitter;

const fs = require('fs')


//------------------------------------------------------------------
// Door
//------------------------------------------------------------------

class Door extends EventEmitter {
    open() {
        console.log("door opened");
        this.emit('open', { doorNumber: 1, floorNumber: 2 })
    }
    close() {
        console.log("door closed");
        this.emit('close', { doorNumber: 1, floorNumber: 2 })
    }
}

const door = new Door();

setTimeout(() => {
    door.open()
    setTimeout(() => {
        door.close()
    }, 2000);
}, 2000);


//------------------------------------------------------------------
// Light
//------------------------------------------------------------------

door.on('open', e => {
    console.log("Light ON ", e.doorNumber, e.floorNumber);
})

door.on('close', e => {
    console.log("Light OFF ", e.doorNumber, e.floorNumber);
})


//------------------------------------------------------------------
// AC
//------------------------------------------------------------------

door.on('open', e => {
    console.log("AC ON ", e.doorNumber, e.floorNumber);
})

door.on('close', e => {
    console.log("AC OFF ", e.doorNumber, e.floorNumber);
})
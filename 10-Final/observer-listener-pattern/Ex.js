const Rx=require('rxjs')

//---------------------------------------------------------
// Room
//---------------------------------------------------------

const stream=new Rx.Subject() // Observable Stream


//-------------------
// Light
//-------------------

let light={
    on(){
        console.log("light ON");
    },
    off(){
        console.log("light OFF");
    }
}

stream.subscribe(e=>{
    if(e.type==="open"){
        light.on()
    }
     if(e.type==="close"){
        light.off()
    }
})


//-------------------
// AC
//-------------------

let ac={
    on(){
        console.log("AC ON");
    },
    off(){
        console.log("AC OFF");
    }
}

stream.subscribe(e=>{
    if(e.type==="open"){
        ac.on()
    }
     if(e.type==="close"){
        ac.off()
    }
})

//-------------------
// sound system
//-------------------

let ss={
    on(){
        console.log("ss ON");
    },
    off(){
        console.log("ss OFF");
    }
}

stream.subscribe(e=>{
    if(e.type==="open"){
        ss.on()
    }
     if(e.type==="close"){
        ss.off()
    }
})


//-------------------
// Door
//-------------------

// principle : closed for modification & open for extension

let door={
    // listeners:[],
    // addDoorListener(listener){
    //     this.listeners.push(listener)
    // },
    open(){
        console.log("door open");
        // light.on()
        // ac.on()
        // this.listeners.forEach(listener=>listener.on())
        stream.next({type:'open'})
    },
    close(){
        console.log("door close");
        // light.off()
        // ac.off()
        // this.listeners.forEach(listener=>listener.off())
        stream.next({type:'close'})
    }
}


// door.addDoorListener(light)
// door.addDoorListener(ac)
// door.addDoorListener(ss)

setTimeout(() => {
    door.open();
    setTimeout(() => {
        door.close()
    }, 2000);
}, 2000);
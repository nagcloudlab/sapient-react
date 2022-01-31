const fs = require('fs').promises


//-----------------------------------------------------
// callback style
//-----------------------------------------------------

// fs.readFile('./veg.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })

// fs.readFile('./non-veg.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })


//-----------------------------------------------------
// promise style
//-----------------------------------------------------
async function readVegMenu() {
    const vegMenu = await fs.readFile('./veg.txt')
    console.log(vegMenu.toString());
}

async function readNonVegMenu() {
    const nonVegMenu = await fs.readFile('./non-veg.txt')
    console.log(nonVegMenu.toString());
}

readVegMenu();
readVegMenu();
readNonVegMenu();


console.log("cont..with other work..");

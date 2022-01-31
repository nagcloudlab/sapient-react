
// import fs from 'fs' // esm
// - or -
const fs = require('fs'); // cjs

// IO ==> read / write file-syste, db , n/w ing applns

const vegMenu = fs.readFileSync('./veg.txt') // 6s // blocking/sync-IO 
console.log(vegMenu.toString());

const nonVegMenu = fs.readFileSync('./non-veg.txt') //4s // blocking/sync-IO 
console.log(nonVegMenu.toString());

console.log("cont..with other work..");


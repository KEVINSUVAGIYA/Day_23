// CommanJS

const { log } = require("node:console");
const object1 = require("./Other.js");
const os = require('node:os'); 

console.log("I am Gonna Change the World One Day." , object1);
console.log(os.homedir);
console.log(os.cpus());
console.log(os.hostname());
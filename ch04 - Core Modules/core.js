const path = require("path");
const { log } = require("util"); // destructuring
const v8 = require("v8");

//const dirUploads = path.join(__dirname, "www", "files", "uploads");
//console.log(dirUploads);


log( path. basename(__filename) );
log(" ^ The name of the current file");

console.log(v8.getHeapSpaceStatistics());
const fs = require("fs");

//const text = fs.readFileSync("./assets/text", "utf-8");
fs.readFile("./assets/text1", "utf-8", (err, text) => {

    if(err) {
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }
    console.log("file contents read");
    console.log(text);
});


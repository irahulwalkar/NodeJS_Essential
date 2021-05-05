const cp = require("child_process");

//cp.exec("open http://www.linkedin.com/learing");

//cp.exec("open -a Terminal .");

cp.exec("dir", (err, data) => {
    if(err) {
        throw err;
    }

    console.log(data);
});

cp.exec("ls", (err, data, stderr) => {
    console.log(stderr);
});


cp.exec("node readStream", (err, data, stderr) => {
    console.log(data);
})
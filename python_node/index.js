var fs = require('fs');

var arr = [9,3];

fs.writeFile('input.txt', arr, (err, res) => {
    if(err) throw err;
    console.log(res);
    var spawn = require("child_process").spawn; 
    var process = spawn('python',["./add.py"] );
    process.stdout.on('data', function (data) {
        res.send(data.toString());
        console.log(data);
        fs.readFile('output.txt', (err, res) => {
            console.log(res);
        });
    });
    //console.log(process);
    //while(!process); 
});
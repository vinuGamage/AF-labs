console.log("Hello World");

//Question 2
//Importing os
const os = require('os');

console.log('Architecture ' + os.arch);
console.log('CPUs ' + os.cpus().length);
console.log('OS ' + os.platform());

//Question 3
//Importing files
 const fs = require('fs');

//Setting the directory name
const fileName = __dirname + '/test.txt';

//Reading the file asynchronously
fs.readFile(fileName,(err,data)=>{
    if (err)
        console.error(err);
    console.log(data.toString());
    //console.log(data);
});

//Reading the file synchronously
const data = fs.readFileSync(fileName);
console.log(data.toString());

// Question 4
// Using streams to copy the content
const fileName = __dirname + '/test.txt';
const outFileName = __dirname + '/test-copy.txt';

//creating the read and write streams from the
// source and destination files
const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

//Pipe the readStream to write
readStream.pipe(writeStream);

//Event Listening
readStream.on('data',data=>{
    console.log(data.toString());
});

//Question 5
//HTTP server
const http = require('http');

http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(3000);

const http = require('http');
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;
    }
}).listen(3000, (err) => {
    console.log('Server is listening to port 3000');
});
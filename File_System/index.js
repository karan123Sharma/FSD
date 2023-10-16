
//Node.js File System Module
// Node.js as a File Server:
// The Node.js file system module allows you to work with the file system on your computer.
// To include the File System module, use the require() method:
// var fs = require('fs');
//Common use for the File System module:
//1. Read files, 2. Create files, 3. Update files, 4. Delete files, 5. Rename files
// 1. Read Files:
//The fs.readFile() method is used to read files on your computer.
// Assume we have the following txt file (located in the same folder as Node.js):
 // Example-1

      //Execute code:
var fs = require("fs")  
//Asynchronous read  
fs.readFile('server.txt', function (err, data) {  
    if (err) {  
        return console.error(err);  
    }  
    console.log("Asynchronous read: " + data.toString());  
 });  
// Synchronous read  
 var data = fs.readFileSync('server.txt');  
 console.log("Synchronous read: " + data.toString());  
 console.log("Program Ended");  
console.log('Hello World!!');  

// Example-2
// Assume we have the following HTML file (located in the same folder as Node.js):

//Create a Node.js file that reads the HTML file, and return the content:

      //Execute code:
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

// 2. Create Files
// The File System module has methods for creating new files:
// fs.appendFile()
// fs.open()
// fs.writeFile()
// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
// Example-1
// Create a new file using the appendFile() method

      //Execute code:
var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing",
// the specified file is opened for writing. If the file does not exist, an empty file is created:
// Example
// Create a new, empty file using the open() method:

      //Execute code:
var fs = require('fs');
fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });

// The fs.writeFile() method replaces the specified file and content if it exists.
// If the file does not exist, a new file, containing the specified content, will be created:
// Example-1
//Create a new file using the writeFile() method:

      //Execute code:
var fs = require('fs');
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// Example-2: replaces the specified file and content if it exists.

      //Execute code:
var fs = require('fs');
fs.writeFile('mynewfile3.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
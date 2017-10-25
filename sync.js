   /*
 Author: Tesfaye Belachew
 Date: Oct 25, 2017 
 Read content from a file and write its content to another file SYNCHRONOUSLY
 =======================================================================================
 Control flow
 1. Read file content 
 2. Write content from a file and write to another file
 */

 // load file system core module
var fs = require('fs');

var fs = require('fs');
var fileContent = fs.readFileSync('quoteFile.txt','UTF8', function(){
	console.log("=> File content read from 'quoteFile' succesfully!\n");
});

console.log(fileContent);
fs.writeFileSync('quoteFile_new.txt',fileContent,function(){
	console.log("File read successfully!");
});
 /*
 Author: Tesfaye Belachew
 Date: Oct 25, 2017 
 Read content from a file and write its content to another file using FUNCTIONAL PROGRAMMING
 =======================================================================================
 Control flow
 1. Read file content 
 2. Write content from a file and write to another file
 */

 // load file system core module
var fs = require('fs');

//read text content from a file and write its content to console window
  fs.readFile('quoteFile.txt','UTF8', function(error, data){
					 if(error){
					  return console.log("Something went wrong. "+ error);
					 }
					   console.log("=> File content read from 'quoteFile.txt' succesfully!\n");
					   //wrtie content to console window
					   console.log(data);
                       //write content to a file
					   writeContent(data);  
				});

 
 //wite file content to another file
 function writeContent(data){
	  fs.writeFile('quoteFile_new.txt',data, function(error){
		 if(error){
		  return console.error(error);
		 }
		 console.log("=> Brian Tracy's quote shown above is also written to a 'quoteFile_new.txt' file succesfully!");
		 });
  }
 /*
 Author: Tesfaye Belachew
 Date: Oct 25, 2017

 Read content from a file and write its content to another file using EVENTS nodejs core module
 =======================================================================================
 Control flow
 1. Read file content 
 2. Write content from a file and write to another file
 */
//Load core modules
var fs = require('fs');
var events = require('events');

//instantial EventEmitter class
var workFlow = new events.EventEmitter();
   
workFlow.on("READ", function readEeventHandler(){
   fs.readFile('quoteFile.txt','UTF8', function(error, data){
					 if(error){
					  return console.log("Something went wrong. "+ error);
					 }
					   console.log("\n=> File content read from 'quoteFile.txt' succesfully!\n");
					   //wrtie content to console window
					   console.log(data);
					   //pass the file content to on write event handler
					   workFlow.emit('WRITE',data);  
					});
      }
  );

workFlow.on('WRITE', function writeEventHandler(data){ 

      fs.writeFile('quoteFile_new.txt', data, function(error){
		 if(error){
		  return console.error(error);
		 }
		 console.log("\n=> Brian Tracy's quote shown above is also written to a 'quoteFile_new.txt' file succesfully!");
		 });

}); 

workFlow.emit('READ');

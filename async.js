 /*
 Author: Tesfaye Belachew
 Date: Oct 25, 2017 
 Read content from a file and write its content to another file ASYNC 3rd party nodejs module
 =======================================================================================
 Control flow
 1. Read file content 
 2. Write content from a file and write to another file
 */

// load file system core module
var  fs= require('fs');
//Load 3rd party module
var async = require('async');   
 
var data =
`**********************************************************************

"Nature won't give you a burnning desire to do something without 
equipping you all skills to acheive it". ~ Brian Tracy

**********************************************************************

**********************************************************************

"ተፈጥሮ የተሟላ ችሎታ ሳትሰጥህ ፤ የሆነ ነገር ለመስራት በዉስጥህ ጽኑ ፍላጎት እንዲኖር አታረግም!". ~ ብሪያን ትሬሲ

**********************************************************************`;
async.series([ 
		function readContent(callback){
		fs.readFile('quoteFile.txt','UTF8',callback);  
		}, 

		function writeContent(callback){ 
		fs.writeFile('quoteFile_new.txt',data, callback);
		}
		],

		function callback(error, data){
					 if(error){
					  return console.log("Something went wrong. "+ error);
					 }
					   console.log("=> File content read from 'quoteFile.txt' succesfully!\n");
					   //wrtie content to console window
					   console.log(data.toString());  
		}
		);  


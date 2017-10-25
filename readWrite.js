 //Read write custom module
 var fs = require('fs');
//read text content from a file and write its content to console window asynchronously
exports.readContent= function readContent(file, callBack);

 exports.writeContent= function writeContent(data, callBack){
	  fs.writeFile('quoteFile_new.txt',data, writeCallback(error));
  }



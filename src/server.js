var express = require('express');   
//var body_parser = require('body-parser');    
var app = express();



//Config port for server
var port = 3000; 

app.listen(port, function(){
	console.log("Server Active on ", port);
});    
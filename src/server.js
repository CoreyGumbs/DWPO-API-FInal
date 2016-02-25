var express = require('express');   
var body_parser = require('body-parser');    
var app = express();


//Config port for server
var port = 3000; 

//routes
app.use('/api', require('../routes/api.js')(express));

//variable to be used in test/
var server = app.listen(port, function(){
	console.log("Server Active on ", port);
});    

module.exports = server;
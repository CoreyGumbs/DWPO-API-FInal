module.exports = function(express){
	
	//router 
	var router =  express.Router(); 	
	
	//route to 'api/v1' endpoint
	router.get('/v1', function(req, res){
		//api json data
		res.json({hello: "world"});

	});

	//returns router
	return router
}
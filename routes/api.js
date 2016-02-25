module.exports = function(express){
	
	//router 
	var router =  express.Router(); 	

	router.get('/v1', function(req, res){

		res.json({hello: "world"});

	});

	return router
}
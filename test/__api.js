//initiates supertest
var request =  require('supertest');

describe('API', function(){
	//declare variable for server instatiation
	var server;

	//initiates a new open server before testing
	beforeEach(function(){
		server = require('../src/server.js'); 
	});

	//closes open server after testing
	afterEach(function(){
		server.close();
	});

	//tests route 'api/v1' for a specified json object of {hello: "world"} or just json objects
	it('/v1/ should return json object(s)', function apiTest(done){
		request(server)
			.get('/api/v1')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/, done)
			//or can add this for test of specific json object
			//.expect(200, {hello: "world"}, done)

	});
});
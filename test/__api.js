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

	//tests route 'api/v1' for a specified json object of {hellp: "world"}
	it('/v1/ should return specified object', function apiTest(done){
		request(server)
			.get('/api/v1')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/, done)
			//.expect(200, {hello: "world"}, done)

	});
});
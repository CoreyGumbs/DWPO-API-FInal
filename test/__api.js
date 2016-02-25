var request =  require('supertest');

describe('API', function(){
	var server;

	beforeEach(function(){
		server = require('../src/server.js'); 
	});

	afterEach(function(){
		server.close();
	});

	it('/v1/ should return specified object', function apiTest(done){
		request(server)
			.get('/api/v1')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, {hello: "world"}, done)

	});
});
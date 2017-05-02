'use strict';
const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({port: 8080});

server.route({
	method: 'GET',
	path:'/api/ping',
	handler: HandlerFunction
});

function HandlerFunction(request, reply) {
	let rep = {
		version:"v3",
		response: "pong",
		timestamp: new Date().getTime()
	};

	reply(rep);
}


server.start((err) => {
	if (err) {
		throw err;
	}

	console.log(`Server run at: ${server.info.uri}`);
});

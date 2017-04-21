'use strict';

const Hapi = require('hapi');
const config = require('./config');
const routes = require('./routes');

const server = new Hapi.Server();
server.connection({ port: config.port, host: config.host, router:{stripTrailingSlash: true} });

server.route(routes);

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
const Hapi = require('hapi'),
    mongoose = require('mongoose'),
    config = require('./config'),
    routes = require('./routes');

// Initialize mongo db connection
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUrl);

// Create Hapi server
const server = new Hapi.Server();
server.connection({ port: config.port, host: config.host, router:{stripTrailingSlash: true} });

// Import routes
server.route(routes);

// Start Hapi server if not being imported
if (!module.parent) {
    server.start((err) => {
        if (err) throw err;
        console.log(`Server running at: ${server.info.uri}`);
    });
}

module.exports = server;
const port = 3000,
    host = 'localhost',
    service = 'mydb';
let localMongoUrl = 'mongodb://localhost/mydb';

// Use a local test database for integration tests
if(process.env.NODE_ENV === 'test')
    localMongoUrl += '-test';

module.exports = {
    mongoUrl: localMongoUrl,
    host: host,
    port: port
}

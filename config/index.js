const port = 3000,
    host = 'localhost';
let localMongoUrl = 'mongodb://localhost/mydb';

// Use a local test database for integration tests
if (process.env.NODE_ENV === 'test') localMongoUrl = 'mongodb://127.0.0.1/mydb_test';

module.exports = {
    mongoUrl: localMongoUrl,
    host,
    port
};
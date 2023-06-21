// Import from mongoose.
const { connect, connection } = require('mongoose');

// Connection string to local instance of MongoDB.
const connectionString =
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/networkDB';

// Creates a connection to a MongoDB instance.
connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Export the connection.
module.exports = connection;
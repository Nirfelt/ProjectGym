var auth = {};

// MongoDB url to connect to
auth.mongoUrl = '<mongo_url>:<mongo_port>';

// MongoDB connection string to connect to
auth.mongoConnection = 'mongodb://' + auth.mongoUrl + '/<mongo_db>';

module.exports = auth;

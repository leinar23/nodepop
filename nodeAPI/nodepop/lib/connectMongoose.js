'use strict';

// load mongoose lib
const mongoose = require('mongoose');
const conn = mongoose.connection;

// connection
mongoose.connect('mongodb://localhost/ads', { useNewUrlParser: true });

// manage connection events
conn.on('error', err => {
    console.log('Connection error', err);
    process.exit(1);
});

conn.once('open', () => {
    console.log('MongoDB connnection success at:', conn.name);
});

// export connection
module.exports = conn;
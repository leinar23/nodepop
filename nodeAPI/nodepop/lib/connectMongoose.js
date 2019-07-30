'use strict';

// load mongoose lib
const mongoose = require('mongoose');
const conn = mongoose.connection;

// manage connection events
conn.on('error', err => {
    console.log('Connection error', err);
    process.exit(1);
});

conn.once('open', () => {
    console.log('MongoDB connnection success at:', conn.name);
});

// connection
mongoose.connect('mongodb://localhost/advertisements', { useNewUrlParser: true });

// export connection
module.exports = conn;
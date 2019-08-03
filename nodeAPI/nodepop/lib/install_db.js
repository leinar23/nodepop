'use strict';

const fs = require('fs');
const model = require('../models/Ad');

let ads;

/**
 * fs.readFile use relative paths to process.cwd()
 * with this command, you can know the process.cwd() path to adapt the URI
 * console.log(`Current directory: ${process.cwd()}`);
 */ 

let adsFile = fs.readFile('./lib/ads.json', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    ads = JSON.parse(data);
});

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

conn.once('open', async () => {
    try {
        if (ads !== undefined) {
            const delMany = await model.deleteMany({}).exec();
            console.log('Collections deleted:', delMany['deletedCount']);
            await model.insertMany(ads);
            console.log('Collections inserted:', ads);
        }
        conn.close();
        console.log(`The connection ${conn.name} was closed`);
    } catch (err) {
        console.log('Error:', err);
    }
});
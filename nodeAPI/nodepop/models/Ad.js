'use strict';

const mongoose = require('mongoose');

// schema definition

let adSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});

const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;
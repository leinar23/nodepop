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

adSchema.statics.list = function ({ filter, skip, limit, fields, sort }) {
    const query = Ad.find(filter);
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    query.sort(sort);

    return query.exec();
}

// model creation
const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;
'use strict';

const express = require('express');
const router = express.Router();

const Ad = require('../models/Ad');

/**
* GET /ads
* return a list of ads
*/
router.get('/', async (req, res, next) => {
    try {
        const nombre = req.query.nombre;
        const precio = req.query.precio;
        const skip = parseInt(req.query.skip);
        const limit = parseInt(req.query.limit);
        const fields = req.query.fields;
        const sort = req.query.sort;
        const filter = {};
        
        if (nombre) filter.nombre = nombre;
        if (precio !== undefined) filter.precio = precio;
        
        const ads = await Ad.list({ filter, skip, limit, fields, sort });
        
        res.locals.ads = ads;
        res.render('nodepop', { title: 'Nodepop' });
    } catch (err) {
        next(err);
    }
});

/**
* GET /ads.id
* return and ad
*/
router.get('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;
        
        const ad = await Ad.findById(_id).exec();
        
        if (!ad) {
            res.status(404).json({ success: false });
            return;
        }
        
        res.locals.ads = ads;
        res.render('nodepop');
    }catch (err) {
        next(err);
    }
});

module.exports = router;
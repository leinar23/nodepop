'use strict';

const express = require('express');
const router = express.Router();

const Ad = require('../models/Ad');

router.get('/:foto', async (req, res, next) => {
    try {
        const foto = req.params.foto;

        const ad = await Ad.findOne({ foto }).exec();
        

        if (!ad) {
            res.status(404);
            return;
        }

        res.render('imagen', { foto, src: '/images/' + foto });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
"use strict";
const express = require('express');
let router = express.Router();
let vd = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'index' });
});

router.get('/POI', function(req, res, next) {
    res.render('POI', { title: 'POI',
                        data: vd});
});

router.get('/test', function(req, res, next) {
    res.render('test', { title: 'test' });
});

module.exports = router;

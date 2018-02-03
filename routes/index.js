var express = require('express');
var router = express.Router();
var vd = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'index' });
});

router.get('/POI', function(req, res, next) {
    res.render('POI', { title: 'POI',
                        data: vd});
});

module.exports = router;

var express = require('express');
var csrf = require('csurf');
var bodyParser = require('body-parser');
var router = express.Router();

var csrfProtection = csrf({ cookie: true });
var parseForm = bodyParser.urlencoded({ extended: false });

/* GET users listing. */
router.get('/token', csrfProtection, function(req, res, next) {
  res.json({token: req.csrfToken()});
});

router.get('/assets', csrfProtection, function(req, res, next) {
  // res.json({token: req.csrfToken()});
  res.json({assets: []});
});

module.exports = router;

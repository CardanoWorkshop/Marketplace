var express = require('express');
var csrf = require('csurf');
var bodyParser = require('body-parser');
const { route } = require('.');
var router = express.Router();

var csrfProtection = csrf({ cookie: true });
var parseForm = bodyParser.urlencoded({ extended: false });

/* GET users listing. */
router.get('/token', csrfProtection, function(req, res) {
  res.json({token: req.csrfToken()});
});

router.get('/assets', csrfProtection, function(req, res) {
  // res.json({token: req.csrfToken()});
  res.json({results: []});
});

router.get('/operations', csrfProtection, (req, res) => {
  res.json({results: []});
})

router.get('/operations/:operationId', csrfProtection, (req, res) => {
  res.json({results: []});
});

router.post('contracts/compile_proxy', csrfProtection, (req, res) => {
  res.json({results: []});
});

router.post('contracts/compile_clear', csrfProtection, (req, res) => {

});

router.post('contracts/compile_manager', csrfProtection, (req, res) => {

});

router.post('contracts/compile_escrow', csrfProtection, (req, res) => {

});

router.post('assets/validate_asset', csrfProtection, (req, res) => {

});

router.post('operations/send_tx', csrfProtection, (req, res) => {

});

router.post('contracts/submit_contract', csrfProtection, (req, res) => {

});

router.post('contracts/submit_configuration', csrfProtection, (req, res) => {

});

router.post('assets/submit_asset', csrfProtection, (req, res) => {

});

router.get('api/assets/:guid', csrfProtection, (req, res) => {

});

router.get('api/users/:address', csrfProtection, (req, res) => {

});

module.exports = router;

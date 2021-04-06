var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/', function(req, res, next) {
  res.send('post request recieved');
});


router.get('/test', function(req, res, next) {
  res.send('respond with a test resource');
});


module.exports = router;

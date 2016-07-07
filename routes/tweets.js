var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log('got tweets');
  res.json([{text: 'Here is a bunch of fake tweets'}]);
});

router.post('/', function(req, res, next) {
  console.log('posted', req.body);
  res.json({status: 'success'});
});

module.exports = router;

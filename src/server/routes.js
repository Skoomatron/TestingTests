const router = require('express').Router();
const controller = require('./controller/index.js');

console.log('made it to the router')

router.post('/post', controller.create);

module.exports = router;
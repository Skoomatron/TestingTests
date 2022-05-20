const router = require('express').Router();
const controller = require('./controller/index.js');

router.post('/create', controller.create);

module.exports = router;
var express = require('express');
var router = express.Router();
var menucontrollers = require('../controllers/menucontroller');
/* GET home page. */
router.get('/', menucontrollers.index);
    //res.send('bienvenido a la biblioteca');
module.exports = router;

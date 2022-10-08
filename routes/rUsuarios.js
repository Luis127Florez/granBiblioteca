var express = require('express');
const { index } = require('../controllers/libroscontrollers');
var router = express.Router();
var rUsuarioscontroller = require('../controllers/rUsuarioscontroller');



/* GET home page. */
router.get('/',rUsuarioscontroller.index);
    //res.send('bienvenido a la biblioteca');
module.exports = router;

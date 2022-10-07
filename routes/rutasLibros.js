var express = require('express');
var router = express.Router();
var libroscontrollers = require('../controllers/libroscontrollers');
var multer = require('multer');
var fecha = Date.now();

var rutaAlmacen = multer.diskStorage({
    destination:function (request, file, callback) {
        callback(null, './public/images');
    },
    filename:function (request, file, callback) {
        callback(null,fecha+'_'+file.originalname);       
    }
}
);
var cargar = multer({storage:rutaAlmacen});
/* GET home page. */
router.get('/', libroscontrollers.index);

router.get('/crear', libroscontrollers.crear);

router.post('/',cargar.single('archivo'), libroscontrollers.guardar);

router.post('/eliminar/:id',libroscontrollers.eliminar);

router.get('/editar/:id',libroscontrollers.editar);

router.post('/actualizar',cargar.single('archivo'), libroscontrollers.actualizar);

router.get('/Cancelar', libroscontrollers.Cancelar);



module.exports = router;

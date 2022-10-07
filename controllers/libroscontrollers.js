var con = require("../config/conexion");
var libros = require("../model/libros");
var borrar = require("fs");
const { send } = require("process");

module.exports = {   
    index: function(req,res){
        libros.obtener(con, function (err, datos) {
            res.render('libros/index', { title: 'Express', libros:datos }); 

        })
    },
    crear: function(req, res) {
        res.render('libros/crear');  
    },

    Cancelar: function(req, res) {
        res.redirect('/rutasLibros'); 
    },

    guardar:function (req, res) {

        libros.insertar(con,req.body, req.file, function (err) {
             res.redirect('/rutasLibros');
        })
    },

    eliminar:function (req, res) {     

        libros.retornarDatosId(con, req.params.id, function (err,registros) {
            var nombreImagen = "public/images/"+(registros[0].img)
            

            if (borrar.existsSync(nombreImagen)) {
                borrar.unlinkSync(nombreImagen);
            }

            libros.borra(con, req.params.id, function (err) {
                res.redirect('/rutasLibros');
            } ) 
                       
        })
        

    },
    
    editar: function (req, res) {
        libros.retornarDatosId(con, req.params.id, function (err,registros) { 
        res.render('libros/editar', {libros: registros[0]});  
        });


        
    },
    actualizar: function (req, res ){

        if (req.file) {
            if (req.file.filename) {

                libros.retornarDatosId(con, req.body.id, function (err,registros) { 
                    var nombreImagen = "public/images/"+(registros[0].img)     

                    if (borrar.existsSync(nombreImagen)) {
                        borrar.unlinkSync(nombreImagen);
                    }

                    libros.actualizarArchivo(con, req.body, req.file, function (err) {
                        
                    })
                
                })
                
            }
        }

        if (req.body.nombre) {
            libros.actualizar(con, req.body, function(err) {

            });
        }
        res.redirect('/rutasLibros');
    }

}
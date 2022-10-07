module.exports = {
    obtener : function(conexion, funcion) {
        conexion.query("SELECT * FROM libros", funcion);
    },
    
    insertar : function(conexion, datos,archivos, funcion) {
        
        conexion.query("INSERT INTO libros (nombre, img) VALUES ("+"'"+datos.nombre+"'"+","+"'"+archivos.filename+"'"+")", funcion);
        
    },

    retornarDatosId : function (conexion, id, funcion) {
        conexion.query("SELECT * FROM libros WHERE id = "+id+"", funcion);
    },

    borra : function (conexion, id, funcion) {
        
        conexion.query("DELETE FROM libros WHERE libros.id = "+id+"", funcion);
        
    },

    actualizar : function(conexion, datos, funcion) {
        
        conexion.query("UPDATE libros SET nombre = "+"'"+datos.nombre+"'"+"WHERE id = "+datos.id+"", funcion);
        
    },
    actualizarArchivo : function(conexion, datos, archivos, funcion) {
        
        conexion.query("UPDATE libros SET img = "+"'"+archivos.filename+"'"+"WHERE id = "+datos.id+"", funcion);
        
    } 
}
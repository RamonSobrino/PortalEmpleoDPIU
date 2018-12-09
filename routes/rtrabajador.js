module.exports = function(app, swig, gestorBD) {

    var entidades = require('./entidades.js');
    var uris = require('./uris.js');
    var msg = require('./msg.js');

    app.get(uris.curriculum(), function(req, res) {
        var  usuario =  req.session.usuario

        var criterio = { "usuarioId" : usuario._id.toString() };

        gestorBD.obtener(criterio, entidades.curriculums(), function(curriculum) {
            if (curriculum == null || curriculum.length == 0) {
                var  accion = "nuevo";
            } else {
                var accion = "modificar";
            }
            res.send(swig.renderFile('views/private/bcurriculum.html', {
                active: "curriculum",
                accion: accion,
                usuario: req.session.usuario,
                curriculum: curriculum[0]
            }));
        });
    });


    app.post(uris.curriculumNuevo(), function(req, res) {
        var curriculum = {
            usuarioId: req.session.usuario._id,
            nombre : req.body.nombre,
            fechaNacimiento : req.body.fechaNacimiento,
            email : req.body.email,
            estudios : req.body.estudios,
            expLaboral : req.body.expLaboral,
            idiomas : req.body.idiomas,
            otrasCualificaciones : req.body.otrasCualificaciones,
            intereses : req.body.intereses,
        };

        gestorBD.insertar(data=curriculum, entidades.curriculums(), function(id) {
            if (id == null){
                res.redirect(uris.curriculum()
                    + msg.danger("Error al crear el curriculum"));
            } else {
                res.redirect(uris.curriculum()
                    + msg.success("Nueva curriculum creado"));
            }
        });
    });

    app.post(uris.curriculumModificar(), function(req, res) {
        var criterio = { "usuarioId" :req.session.usuario._id.toString()};
        var curriculum = {
            usuarioId: req.session.usuario._id,
            nombre : req.body.nombre,
            fechaNacimiento : req.body.fechaNacimiento,
            email : req.body.email,
            estudios : req.body.estudios,
            expLaboral : req.body.expLaboral,
            idiomas : req.body.idiomas,
            otrasCualificaciones : req.body.otrasCualificaciones,
            intereses : req.body.intereses
        };

        gestorBD.actualizar(criterio,data=curriculum, entidades.curriculums(), function(result) {
            if (result == null){
                res.redirect(uris.curriculum()
                    + msg.danger("Error al crear el curriculum"));
            } else {
                res.redirect(uris.curriculum()
                    + msg.success("Nueva curriculum modificado"));
            }
        });
    });

};
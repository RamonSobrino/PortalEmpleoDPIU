module.exports = function(app, swig, gestorBD) {

    var entidades = require('./entidades.js');
    var uris = require('./uris.js');
    var msg = require('./msg.js');

    app.get(uris.nuevaOferta(), function(req, res) {
        res.send(swig.renderFile('views/bveroferta.html', {
            active : "",
            usuario: req.session.usuario,
            accion : "nuevo",
         }));
    });

    app.post(uris.nuevaOferta(), function(req, res) {
        var oferta = {
            usuarioId: req.session.usuario._id,
            empresa : req.body.empresa,
            cargo : req.body.cargo,
            requisitosMinimos : req.body.requisitosMinimos,
            requisitosDeseables : req.body.requisitosDeseables,
            sueldo : req.body.sueldo,
            localizacion : req.body.localizacion
        };

        gestorBD.insertar(data=oferta, entidades.ofertas(), function(id) {
            if (id == null){
                res.redirect(uris.misofertas()
                    + msg.danger("Error al crear la oferta"));
            } else {
                res.redirect(uris.modificarOferta()
                    + "/" + id.toString()
                    + msg.success("Nueva oferta creada"));
            }
        });
    });

    app.get(uris.modificarOferta() + "/:id", function(req, res) {
        var ofertaId = req.params.id;
        var criterio = { "_id" : gestorBD.mongo.ObjectID(ofertaId) };

        gestorBD.obtener(criterio, entidades.ofertas(), function(ofertas) {
            if (ofertas == null || ofertas.length == 0) {
                res.redirect(uris.identificarse()
                    + msg.danger("No se puede ver la oferta"));
            } else {
                res.send(swig.renderFile('views/bveroferta.html', {
                    active : "",
                    usuario: req.session.usuario,
                    accion : "modificar",
                    oferta : ofertas[0]
                }));
            }
        });
    });

    app.post(uris.modificarOferta() + "/:id", function(req, res) {
        var ofertaId = req.params.id;
        var criterio = { "_id" : gestorBD.mongo.ObjectID(ofertaId) };
        var oferta = {
            empresa : req.body.empresa,
            cargo : req.body.cargo,
            requisitosMinimos : req.body.requisitosMinimos,
            requisitosDeseables : req.body.requisitosDeseables,
            sueldo : req.body.sueldo,
            localizacion : req.body.localizacion
        };

        gestorBD.actualizar(criterio,data=oferta, entidades.ofertas(), function(result) {
            if (result == null){
                res.redirect(uris.misofertas()
                    + msg.danger("Error al actualizar la oferta"));
            } else {
                res.redirect(uris.modificarOferta()
                    + "/" + ofertaId
                    + msg.success("Oferta actualizada"));
            }
        });
    });

    app.get(uris.verOferta(), function(req, res) {
        var ofertaId = req.params.id;
        var criterio = { "_id" : gestorBD.mongo.ObjectID(ofertaId) };

        gestorBD.obtener(criterio, entidades.ofertas(), function(ofertas) {
            if (ofertas == null || ofertas.length == 0) {
                res.redirect(uris.identificarse()
                    + msg.danger("No se puede ver la oferta"));
            } else {
                var accion = "ver";
                if(req.session.usuario){
                    accion = "modificar";
                }
                res.send(swig.renderFile('views/bveroferta.html', {
                    active : "",
                    usuario: req.session.usuario,
                    accion : accion,
                    oferta : ofertas[0]
                }));
            }
        });
    });

};
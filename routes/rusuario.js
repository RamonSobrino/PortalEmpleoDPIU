module.exports = function(app, swig, gestorBD) {

    var uris = require('./uris.js');
    var msg = require('./msg.js');

    app.get(uris.registrarse(), function(req, res) {
        res.send(swig.renderFile('views/bregistro.html', {}));
    });

    app.post(uris.usuario(), function(req, res) {
        var seguro = app.get("crypto").createHmac('sha256', app.get('clave'))
            .update(req.body.password).digest('hex');
        var usuario = {
            email : req.body.email,
            tipo : req.body.tipo,
            password : seguro
        }

        gestorBD.insertar(data=usuario, entidad="usuario", function(id) {
            if (id == null){
                res.redirect(uris.registrarse()
                    + msg.danger("Error al registrar usuario"));
            } else {
                res.redirect(uris.identificarse()
                    + msg.success("Nuevo usuario registrado"));
            }
        });

    });

    app.get(uris.desconectarse(), function(req, res) {
        req.session.usuario = null;
        res.redirect(uris.principal()
            + msg.info("Has cerrado sesión con éxito"));
    });

    app.get(uris.identificarse(), function(req, res) {
        res.send(swig.renderFile('views/bidentificacion.html', {}));
    });

    app.post(uris.identificarse(), function(req, res) {
        var seguro = app.get("crypto").createHmac('sha256', app.get('clave'))
            .update(req.body.password).digest('hex');
        var criterio = {
            email : req.body.email,
            password : seguro
        }

        gestorBD.obtener(criterio, entidad="usuario", function(usuarios) {
            if (usuarios == null || usuarios.length == 0) {
                req.session.usuario = null;
                res.redirect(uris.identificarse()
                    + msg.danger("Usuario o password incorrecto"));
            } else {
                req.session.usuario = usuarios[0].email;
                res.redirect(uris.principal()
                    + msg.success("Bienvenido " + usuarios[0].email));
            }
        });

    });

};
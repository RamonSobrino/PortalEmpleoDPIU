module.exports = function(app, express, gestorBD) {

    var uris = require('./uris.js');
    var msg = require('./msg.js');

    var validarSesion = express.Router();
    validarSesion.use(function(req, res, next) {
        if ( req.session.usuario ) {
            next();
        } else {
            res.redirect(uris.identificarse()
                + msg.danger("Usuario no identificado"));
        }
    });

    var validarAccesoTrabajador = express.Router();
    validarAccesoTrabajador.use(function(req, res, next) {
        if ( req.session.usuario.tipo == "trabajador" ) {
            next();
        } else {
            res.redirect(uris.identificarse()
                + msg.danger("Usuario no autorizado"));
        }
    });

    var validarAccesoEmpresa = express.Router();
    validarAccesoEmpresa.use(function(req, res, next) {
        if ( req.session.usuario.tipo == "empresa" ) {
            next();
        } else {
            res.redirect(uris.identificarse()
                + msg.danger("Usuario no autorizado"));
        }
    });

    /*
        ASIGNACION DE VALIDADORES A URIs
     */
    app.use(uris.carpetaPrivada(), validarSesion);
    app.use(uris.curriculum(), validarAccesoTrabajador);
    app.use(uris.misofertas(), validarAccesoEmpresa);
};
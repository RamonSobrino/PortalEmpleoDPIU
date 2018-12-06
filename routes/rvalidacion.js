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

    /*
        ASIGNACION DE VALIDADORES A URIs
     */
    app.use(uris.carpetaPrivada(), validarSesion);
};
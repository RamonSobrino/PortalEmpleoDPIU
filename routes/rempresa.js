module.exports = function(app, swig, gestorBD) {

    var uris = require('./uris.js');
    var msg = require('./msg.js');

    app.get(uris.misofertas(), function(req, res) {
        res.send(swig.renderFile('views/private/bmisofertas.html', {
            active: "misofertas",
            usuario: req.session.usuario
        }));
    });

};
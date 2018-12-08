module.exports = function(app, swig, gestorBD) {

    var entidades = require('./entidades.js');
    var uris = require('./uris.js');
    var msg = require('./msg.js');

    app.get(uris.curriculum(), function(req, res) {
        res.send(swig.renderFile('views/private/bcurriculum.html', {
            active: "curriculum",
            usuario: req.session.usuario
        }));
    });

};
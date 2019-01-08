module.exports = function(app, swig) {

    var uris = require('./uris.js');

    app.get(uris.marqueting(), function (req, res) {
        res.send(swig.renderFile('views/ampliacion/bmarqueting.html', {
            active: "marqueting",
            usuario: req.session.usuario
        }));
    });

    app.get(uris.publicidad(), function (req, res) {
        res.send(swig.renderFile('views/ampliacion/bpublicidad.html', {
            active: "publicidad",
            usuario: req.session.usuario
        }));
    });

    app.get(uris.conferencias(), function (req, res) {
        res.send(swig.renderFile('views/ampliacion/bconferencias.html', {
            active: "conferencias",
            usuario: req.session.usuario
        }));
    });

    app.get(uris.cursos(), function (req, res) {
        res.send(swig.renderFile('views/ampliacion/bcursos.html', {
            active: "cursos",
            usuario: req.session.usuario
        }));
    });

    app.get(uris.freelance(), function (req, res) {
        res.send(swig.renderFile('views/ampliacion/bfreelance.html', {
            active: "freelance",
            usuario: req.session.usuario
        }));
    });

    app.get(uris.blogs(), function (req, res) {
        res.send(swig.renderFile('views/ampliacion/bblogs.html', {
            active: "blogs",
            usuario: req.session.usuario
        }));
    });

    app.get(uris.economia(), function (req, res) {
        res.send(swig.renderFile('views/ampliacion/beconomia.html', {
            active: "economia",
            usuario: req.session.usuario
        }));
    });

    app.get(uris.contacta(), function (req, res) {
        res.send(swig.renderFile('views/ampliacion/bcontacta.html', {
            active: "contacta",
            usuario: req.session.usuario
        }));
    });

    app.get(uris.salaPrensa(), function (req, res) {
        res.send(swig.renderFile('views/ampliacion/bsalaPrensa.html', {
            active: "salaPrensa",
            usuario: req.session.usuario
        }));
    });

    app.get(uris.privacidad(), function (req, res) {
        res.send(swig.renderFile('views/ampliacion/bprivacidad.html', {
            active: "privacidad",
            usuario: req.session.usuario
        }));
    });

    app.get(uris.condicionesGenerales(), function (req, res) {
        res.send(swig.renderFile('views/ampliacion/bcondicionesGenerales.html', {
            active: "condicionesGenerales",
            usuario: req.session.usuario
        }));
    });

};
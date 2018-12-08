module.exports = function(app, swig, gestorBD) {

    var entidades = require('./entidades.js');
    var uris = require('./uris.js');
    var msg = require('./msg.js');

    app.get("/", function(req, res) {
        res.redirect(uris.principal());
    });

    app.get(uris.principal(), function (req, res) {
        var criterio = {};
        if( req.query.busqueda != null ){
            criterio = { "cargo" : {$regex : ".*"+req.query.busqueda+".*"}  };
        }

        var pg = parseInt(req.query.pg); // Es String !!!
        if ( req.query.pg == null){ // Puede no venir el param
            pg = 1;
        }

        var numRegistros=10;
        gestorBD.obtenerPaginado(criterio, entidades.ofertas()
                ,pagina=pg,tamanioPagina=numRegistros
                ,function(ofertas, total) {
            if (ofertas == null) {
                res.send("Error al listar ");
            } else {
                var ultimaPg = total/numRegistros;
                if (total % 4 > 0 ){ // Sobran decimales
                    ultimaPg = ultimaPg+1;
                }

                var paginas = [];
                for(var i = pg-2 ; i <= pg+2 ; i++){
                    if ( i > 0 && i <= ultimaPg){
                        paginas.push(i);
                    }
                }

                res.send(swig.renderFile('views/bofertas.html', {
                    active: "inicio",
                    usuario: req.session.usuario,
                    ofertas : ofertas,
                    paginas : paginas,
                    actual : pg
                }));
            }
        });

    });

};
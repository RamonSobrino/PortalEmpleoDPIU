module.exports = function(app, swig, gestorBD) {

    var entidades = require('./entidades.js');
    var uris = require('./uris.js');
    var msg = require('./msg.js');


    app.get(uris.misofertas(), function(req, res) {
        var criterio = {
            usuarioId: req.session.usuario._id
        };
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
                    total = ofertas.length;
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
                    var inicio, fin;
                    if(total<=numRegistros){
                        inicio =1;
                        fin = total;
                    }else if(pg==1){
                        inicio =1;
                        fin =numRegistros;
                    }else{
                        inicio = numRegistros*(pg-1);
                        fin = inicio + numRegistros;
                        if(fin>total){
                            fin =total;
                        }
                    }

                    res.send(swig.renderFile('views/private/bmisofertas.html', {
                        active: "misofertas",
                        usuario: req.session.usuario,
                        ofertas : ofertas,
                        paginas : paginas,
                        actual : pg,
                        total: total,
                        inicio: inicio,
                        fin: fin
                    }));
                }
            });
    });
};
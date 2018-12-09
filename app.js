/*
	MODULOS
 */
var express = require('express');
var app = express();

var expressSession = require('express-session');
app.use(expressSession({
    secret: 'abcdefg',
    resave: true,
    saveUninitialized: true
}));

var crypto = require('crypto');
var fileUpload = require('express-fileupload');
app.use(fileUpload());

var mongo = require('mongodb');
var swig  = require('swig');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

var gestorBD = require("./modules/gestorBD.js");
gestorBD.init(app,mongo);


/*
	CARPETA PUBLICA
 */
app.use(express.static('public'));


/*
	VARIABLES GLOBALES
 */
app.set('port', 8090);
app.set('db','mongodb://admin:dpiu2018@ds127634.mlab.com:27634/dpiu_bolsa_empleo');
//app.set('db','mongodb://localhost:27017/dpiu_bolsa_empleo');
app.set('clave','abcdefg');
app.set('crypto',crypto);


/*
	VALIDADOR DE ACCESO
 */
require("./routes/rvalidacion.js")(app, express, gestorBD);


/*
	CONTROLADORES
 */
require("./routes/rprincipal.js")(app, swig, gestorBD);
require("./routes/rusuario.js")(app, swig, gestorBD);
require("./routes/rempresa.js")(app, swig, gestorBD);
require("./routes/rtrabajador.js")(app, swig, gestorBD);
require("./routes/roferta.js")(app, swig, gestorBD);


/*
    FILTRO PAGINAS NO RECONOCIDAS
 */
var uris = require('./routes/uris.js');
app.get("*", function (req, res) {
    res.redirect(uris.principal());
});


/*
	CONTROLADOR DE ERRORES
 */
app.use( function (err, req, res, next ) {
    console.log("Error producido: " + err); //we log the error in our db
    if (! res.headersSent) { 
        res.status(400);
        res.send("Recurso no disponible");
    }
});


/*
	INICIO DEL SERVIDOR
 */
app.listen(app.get('port'), function() {
	console.log("Servidor activo");
});

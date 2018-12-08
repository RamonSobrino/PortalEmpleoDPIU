
var carpetaPrivada = "/priv";

exports.carpetaPrivada = function () {
    return carpetaPrivada;
};

exports.principal = function () {
    return "/ofertas";
};

exports.desconectarse = function () {
    return "/desconectarse";
};

exports.identificarse = function () {
    return "/identificarse";
};

exports.registrarse = function () {
    return "/registrarse";
};

exports.usuario = function () {
    return "/usuario";
};

exports.verOferta = function () {
    return "/oferta/ver/:id";
};


/*
    ACCESOS PRIVADOS
 */
exports.misofertas = function () {
    return carpetaPrivada + "/misofertas";
};

exports.nuevaOferta = function () {
    return carpetaPrivada + "/misofertas/nuevo";
};

exports.modificarOferta = function () {
    return carpetaPrivada + "/misofertas/modificar";
};

exports.curriculum = function () {
    return carpetaPrivada + "/curriculum";
};

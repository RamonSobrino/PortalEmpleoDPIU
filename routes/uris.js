
var carpetaPrivada = "/priv";

exports.carpetaPrivada = function () {
    return carpetaPrivada;
};

exports.principal = function () {
    return "/";
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
/*
    ACCESOS PRIVADOS
 */
exports.curriculum = function () {
    return carpetaPrivada + "/curriculum";
};

exports.misofertas = function () {
    return carpetaPrivada + "/misofertas";
};
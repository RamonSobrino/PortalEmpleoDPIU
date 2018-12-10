
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

exports.infousuario = function () {
    return "/infousuario";
};

exports.verOferta = function () {
    return "/oferta/ver/:id";
};

exports.ofertaAvanzado = function () {
    return "/ofertas/avanzado";
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

exports.eliminarOferta = function () {
    return carpetaPrivada + "/misofertas/eliminar/:id";
};

exports.apuntarseOferta = function () {
    return carpetaPrivada + "/ofertas/apuntarse";
};

exports.curriculum = function () {
    return carpetaPrivada + "/curriculum";
};

exports.curriculumNuevo = function () {
    return carpetaPrivada + "/curriculum/nuevo";
};

exports.curriculumModificar = function () {
    return carpetaPrivada + "/curriculum/modificar";
};



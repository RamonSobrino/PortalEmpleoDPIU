
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


/*
    ACCESOS DE AMPLIACION
 */
exports.marqueting = function () {
    return "/ampliacion/marqueting";
};
exports.publicidad = function () {
    return "/ampliacion/publicidad";
};
exports.conferencias = function () {
    return "/ampliacion/conferencias";
};
exports.cursos = function () {
    return "/ampliacion/cursos";
};
exports.freelance = function () {
    return "/ampliacion/freelance";
};
exports.blogs = function () {
    return "/ampliacion/blogs";
};
exports.economia = function () {
    return "/ampliacion/economia";
};
exports.contacta = function () {
    return "/ampliacion/contacta";
};
exports.salaPrensa = function () {
    return "/ampliacion/salaPrensa";
};
exports.privacidad = function () {
    return "/ampliacion/privacidad";
};
exports.condicionesGenerales = function () {
    return "/ampliacion/condicionesGenerales";
};
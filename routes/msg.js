var getMensaje = function(msg, tipoAlert){
    return "?mensaje=" + msg + "&tipoMensaje=" + tipoAlert;
}

exports.info = function (msg) {
    return getMensaje(msg, "alert-info");
};

exports.warning = function (msg) {
    return getMensaje(msg, "alert-warning");
};

exports.danger = function (msg) {
    return getMensaje(msg, "alert-danger");
};

exports.success = function (msg) {
    return getMensaje(msg, "alert-success");
};
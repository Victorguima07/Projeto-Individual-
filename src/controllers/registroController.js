var registroModel = require("../models/registroModel");

function registrar(req, res) {
    var idUsuario = req.body.idUsuario;
    var dataPartida = req.body.dataPartida;
    var local = req.body.local;
    var resultado = req.body.resultado;

    registroModel.registrar(idUsuario, dataPartida, local, resultado)
        .then(resposta => res.json(resposta))
        .catch(erro => {
            console.log("ERRO NO CONTROLLER:", erro);
            res.status(500).json(erro);
        });
}

module.exports = { registrar };
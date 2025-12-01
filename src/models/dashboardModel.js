var database = require("../database/config");

function listar(idUsuario) {
    var instrucao = `
        SELECT idPartida, DATE_FORMAT(dataPartida, '%d/%m/%Y') AS data, localJogo AS local,
        resultado FROM Partida WHERE fkUsuario = ${idUsuario}
        ORDER BY dataPartida DESC;
    `;

    return database.executar(instrucao);
}

module.exports = {
    listar
};
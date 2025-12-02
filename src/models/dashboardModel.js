var database = require("../database/config");

function listar(idUsuario) {
    var instrucao = `
        SELECT idPartida, dataPartida AS dataISO, DATE_FORMAT(dataPartida, '%d/%m/%Y') AS dataFormatada, 
    localJogo AS local, resultado FROM Partida WHERE fkUsuario = ${idUsuario}
    ORDER BY dataPartida DESC;
    `;

    return database.executar(instrucao);
}

module.exports = {
    listar
};
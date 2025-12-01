var database = require("../database/config");

function registrar(idUsuario, dataPartida, local, resultado) {
    var instrucao = `
        INSERT INTO Partida (fkUsuario, dataPartida, localJogo, resultado)
        VALUES ('${idUsuario}', '${dataPartida}', '${local}', '${resultado}');
    `;
    console.log("INSTRUCAO SQL ->", instrucao);
    return database.executar(instrucao);
}

module.exports = { registrar };
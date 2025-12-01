var database = require("../database/config");


function autenticar(email, senha) {
    var instrucao = `
        SELECT idUsuario, nome, nomeUsuario, email
        FROM Usuario
        WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, nomeUsuario, email, senha) {
    var instrucao = `
        INSERT INTO Usuario (nome, nomeUsuario, email, senha)
        VALUES ('${nome}', '${nomeUsuario}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL:\n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar
};
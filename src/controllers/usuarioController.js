var usuarioModel = require("../models/usuarioModel");

function cadastrar(req, res) {
    var nome = req.body.nome;
    var nomeUsuario = req.body.nomeUsuario;
    var email = req.body.email;
    var senha = req.body.senha;

    // validações simples
    if (!nome || !nomeUsuario || !email || !senha) {
        res.status(400).send("Campos obrigatórios vazios!");
        return;
    }

    usuarioModel.cadastrar(nome, nomeUsuario, email, senha)
        .then(resultado => {
            res.status(200).json({ mensagem: "Cadastro realizado!" });
        })
        .catch(erro => {
            console.log("ERRO no cadastro:", erro.sqlMessage);
            res.status(500).json({ erro: erro.sqlMessage });
        });
}

function autenticar(req, res) {
    var email = req.body.email;
    var senha = req.body.senha;

    usuarioModel.autenticar(email, senha)
        .then(resultado => {
            if (resultado.length === 1) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(403).send("Email ou senha inválidos.");
            }
        })
        .catch(erro => {
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrar,
    autenticar
};
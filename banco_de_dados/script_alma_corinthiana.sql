CREATE DATABASE alma_corinthiana;
USE alma_corinthiana;

CREATE TABLE Usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(65) NOT NULL,
sobrenome VARCHAR(65) NOT NULL,
nomeUsuario VARCHAR(65) NOT NULL UNIQUE,
email VARCHAR(50) NOT NULL UNIQUE,
senha VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE Partida (
idPartida INT PRIMARY KEY AUTO_INCREMENT,
fkUsuario INT,
dataPartida DATE NOT NULL,
localJogo VARCHAR(45) NOT NULL,
resultado VARCHAR(45) NOT NULL,
CONSTRAINT fkUsuarios_Partida FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
CONSTRAINT chkResultados CHECK(resultado IN('Vitória', 'Empate', 'Derrota')),
CONSTRAINT chkLocal CHECK(localJogo IN('Arena', 'Fora'))
);

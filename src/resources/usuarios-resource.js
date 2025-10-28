const express = require("express");
const usuariosService = require("../services/usuarios-service");
const { auth } = require("../middleware/auth");

const usuariosResource = express.Router();

// GET - Buscar todos os usuários
usuariosResource.get(
	"/",
	auth.autenticarUsuario,
	usuariosService.retornaTodosUsuarios,
);

// GET - Buscar cursos vinculados ao usuário (deve vir antes da rota /:userId)
usuariosResource.get(
	"/:userId/cursos",
	auth.autenticarUsuario,
	usuariosService.retornaCursosDoUsuario,
);

// GET - Buscar usuário específico
usuariosResource.get(
	"/:userId",
	auth.autenticarUsuario,
	usuariosService.retornaUsuarioPorId,
);

// POST - Criar novo usuário
usuariosResource.post("/", auth.autenticarUsuario, usuariosService.criaUsuario);

// PUT - Atualizar usuário existente
usuariosResource.put(
	"/",
	auth.autenticarUsuario,
	usuariosService.atualizaUsuario,
);

// DELETE - Remover usuário
usuariosResource.delete(
	"/:id",
	auth.autenticarUsuario,
	usuariosService.deletaUsuario,
);

module.exports = usuariosResource;

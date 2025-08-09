const express = require("express");
const usuariosService = require("../services/usuarios-service");
const { auth } = require("../middleware/auth");

const usuariosController = express.Router();

// GET - Buscar todos os usuários
usuariosController.get(
	"/",
	auth.autenticarUsuario,
	usuariosService.retornaTodosUsuarios,
);

// GET - Buscar cursos vinculados ao usuário (deve vir antes da rota /:userId)
usuariosController.get(
	"/:userId/cursos",
	auth.autenticarUsuario,
	usuariosService.retornaCursosDoUsuario,
);

// GET - Buscar usuário específico
usuariosController.get(
	"/:userId",
	auth.autenticarUsuario,
	usuariosService.retornaUsuarioPorId,
);

// POST - Criar novo usuário
usuariosController.post(
	"/",
	auth.autenticarUsuario,
	usuariosService.criaUsuario,
);

// PUT - Atualizar usuário existente
usuariosController.put(
	"/",
	auth.autenticarUsuario,
	usuariosService.atualizaUsuario,
);

// DELETE - Remover usuário
usuariosController.delete(
	"/:id",
	auth.autenticarUsuario,
	usuariosService.deletaUsuario,
);

module.exports = usuariosController;

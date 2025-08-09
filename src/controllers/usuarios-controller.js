const express = require("express");
const usuariosService = require("../services/usuarios-service");

const usuariosController = express.Router();

// GET - Buscar todos os usuários
usuariosController.get("/", usuariosService.retornaTodosUsuarios);

// GET - Buscar cursos vinculados ao usuário (deve vir antes da rota /:userId)
usuariosController.get(
	"/:userId/cursos",
	usuariosService.retornaCursosDoUsuario,
);

// GET - Buscar usuário específico
usuariosController.get("/:userId", usuariosService.retornaUsuarioPorId);

// POST - Criar novo usuário
usuariosController.post("/", usuariosService.criaUsuario);

// PUT - Atualizar usuário existente
usuariosController.put("/", usuariosService.atualizaUsuario);

// DELETE - Remover usuário
usuariosController.delete("/:id", usuariosService.deletaUsuario);

module.exports = usuariosController;

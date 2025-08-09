const express = require("express");
const cursosService = require("../services/cursos-service");
const { auth } = require("../middleware/auth");
const { autorizacao } = require("../middleware/autorizacao");
const { Permissoes } = require("../enums/permissoes");

const cursosController = express.Router();

// GET - Buscar todos os cursos
cursosController.get(
	"/",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao([
		Permissoes.OFERTAS_CURSO.VISUALIZAR,
		Permissoes.OFERTAS_CURSO.VISUALIZAR_TODOS,
	]),
	cursosService.retornaTodosCursos,
);

// POST - Criar novo curso
cursosController.post(
	"/",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.OFERTAS_CURSO.CRIAR),
	cursosService.criaCurso,
);

// PUT - Atualizar curso existente
cursosController.put(
	"/",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.OFERTAS_CURSO.EDITAR),
	cursosService.atualizaCurso,
);

// DELETE - Remover curso
cursosController.delete(
	"/:id",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.OFERTAS_CURSO.DELETAR),
	cursosService.deletaCurso,
);

module.exports = cursosController;

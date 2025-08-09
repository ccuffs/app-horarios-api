const express = require("express");
const docentesService = require("../services/docentes-service");
const { auth } = require("../middleware/auth");
const { autorizacao } = require("../middleware/autorizacao");
const { Permissoes } = require("../enums/permissoes");

const docentesController = express.Router();

// GET - Buscar todos os docentes
docentesController.get(
	"/",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao([
		Permissoes.DOCENTES.VISUALIZAR,
		Permissoes.DOCENTES.VISUALIZAR_TODOS,
	]),
	docentesService.retornaTodosDocentes,
);

// POST - Criar novo docente
docentesController.post(
	"/",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.DOCENTES.CRIAR),
	docentesService.criaDocente,
);

// PUT - Atualizar docente existente
docentesController.put(
	"/",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.DOCENTES.EDITAR),
	docentesService.atualizaDocente,
);

// DELETE - Remover docente
docentesController.delete(
	"/:codigo",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.DOCENTES.DELETAR),
	docentesService.deletaDocente,
);

module.exports = docentesController;

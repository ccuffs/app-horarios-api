const express = require("express");
const docentesService = require("../services/docentes-service");
const { auth } = require("../middleware/auth");
const { autorizacao } = require("../middleware/autorizacao");
const { Permissoes } = require("../enums/permissoes");

const docentesResource = express.Router();

// GET - Buscar todos os docentes
docentesResource.get(
	"/",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao([
		Permissoes.DOCENTES.VISUALIZAR,
		Permissoes.DOCENTES.VISUALIZAR_TODOS,
	]),
	docentesService.retornaTodosDocentes,
);

// POST - Criar novo docente
docentesResource.post(
	"/",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.DOCENTES.CRIAR),
	docentesService.criaDocente,
);

// PUT - Atualizar docente existente
docentesResource.put(
	"/",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.DOCENTES.EDITAR),
	docentesService.atualizaDocente,
);

// DELETE - Remover docente
docentesResource.delete(
	"/:codigo",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.DOCENTES.DELETAR),
	docentesService.deletaDocente,
);

module.exports = docentesResource;

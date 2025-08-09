const express = require("express");
const ccrsService = require("../services/ccrs-service");
const { auth } = require("../middleware/auth");
const { autorizacao } = require("../middleware/autorizacao");
const { Permissoes } = require("../enums/permissoes");

const ccrsController = express.Router();

// GET - Buscar todos os CCRs
ccrsController.get(
	"/",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao([
		Permissoes.CCR.VISUALIZAR,
		Permissoes.CCR.VISUALIZAR_TODAS,
	]),
	ccrsService.retornaTodosCCRs,
);

// POST - Criar novo CCR
ccrsController.post(
	"/",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.CCR.CRIAR),
	ccrsService.criaCCR,
);

// PUT - Atualizar CCR existente
ccrsController.put(
	"/",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.CCR.EDITAR),
	ccrsService.atualizaCCR,
);

// DELETE - Remover CCR
ccrsController.delete(
	"/:id",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.CCR.DELETAR),
	ccrsService.deletaCCR,
);

module.exports = ccrsController;

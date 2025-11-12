const express = require("express");
const ofertasService = require("../services/ofertas-service");
const { auth } = require("../middleware/auth");
const { autorizacao } = require("../middleware/autorizacao");
const { Permissoes } = require("../enums/permissoes");

const ofertasResource = express.Router();

// GET - Buscar todas as ofertas ou filtrar por parâmetros
ofertasResource.get(
	"/",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao([
		Permissoes.OFERTAS_CURSO.VISUALIZAR,
		Permissoes.OFERTAS_CURSO.VISUALIZAR_TODOS,
	]),
	ofertasService.retornaOfertas,
);

// POST - Criar nova oferta
ofertasResource.post(
	"/",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.OFERTAS_CURSO.CRIAR),
	ofertasService.criaOferta,
);

// PUT - Atualizar oferta existente
ofertasResource.put(
	"/:ano/:semestre/:id_curso/:fase/:turno",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.OFERTAS_CURSO.EDITAR),
	ofertasService.atualizaOferta,
);

// DELETE - Remover oferta
ofertasResource.delete(
	"/:ano/:semestre/:id_curso/:fase/:turno",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.OFERTAS_CURSO.DELETAR),
	ofertasService.deletaOferta,
);

// POST - Criar múltiplas ofertas em bulk
ofertasResource.post(
	"/bulk",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.OFERTAS_CURSO.CRIAR),
	ofertasService.salvaOfertasBulk,
);

module.exports = ofertasResource;

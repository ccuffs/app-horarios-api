const express = require("express");
const ofertasService = require("../services/ofertas-service");

const ofertasController = express.Router();

// GET - Buscar todas as ofertas ou filtrar por parâmetros
ofertasController.get("/", ofertasService.retornaOfertas);

// POST - Criar nova oferta
ofertasController.post("/", ofertasService.criaOferta);

// PUT - Atualizar oferta existente
ofertasController.put(
	"/:ano/:semestre/:id_curso/:fase",
	ofertasService.atualizaOferta,
);

// DELETE - Remover oferta
ofertasController.delete(
	"/:ano/:semestre/:id_curso/:fase",
	ofertasService.deletaOferta,
);

// POST - Criar múltiplas ofertas em bulk
ofertasController.post("/bulk", ofertasService.salvaOfertasBulk);

module.exports = ofertasController;

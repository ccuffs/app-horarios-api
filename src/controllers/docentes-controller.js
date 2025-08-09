const express = require("express");
const docentesService = require("../services/docentes-service");

const docentesController = express.Router();

// GET - Buscar todos os docentes
docentesController.get("/", docentesService.retornaTodosDocentes);

// POST - Criar novo docente
docentesController.post("/", docentesService.criaDocente);

// PUT - Atualizar docente existente
docentesController.put("/", docentesService.atualizaDocente);

// DELETE - Remover docente
docentesController.delete("/:codigo", docentesService.deletaDocente);

module.exports = docentesController;

const express = require("express");
const ccrsService = require("../services/ccrs-service");

const ccrsController = express.Router();

// GET - Buscar todos os CCRs
ccrsController.get("/", ccrsService.retornaTodosCCRs);

// POST - Criar novo CCR
ccrsController.post("/", ccrsService.criaCCR);

// PUT - Atualizar CCR existente
ccrsController.put("/", ccrsService.atualizaCCR);

// DELETE - Remover CCR
ccrsController.delete("/:id", ccrsService.deletaCCR);

module.exports = ccrsController;

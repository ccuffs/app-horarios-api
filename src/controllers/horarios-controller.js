const express = require("express");
const horariosService = require("../services/horarios-service");

const horariosController = express.Router();

// GET - Buscar horários
horariosController.get("/", horariosService.retornaHorarios);

// GET - Buscar horário específico por ID
horariosController.get("/:id", horariosService.retornaHorarioPorId);

// PUT - Atualizar horário específico
horariosController.put("/:id", horariosService.atualizaHorario);

// DELETE - Remover horário específico
horariosController.delete("/:id", horariosService.deletaHorario);

// POST - Criar/atualizar múltiplos horários em bulk
horariosController.post("/bulk", horariosService.salvaHorariosBulk);

module.exports = horariosController;

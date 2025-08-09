const express = require("express");
const cursosService = require("../services/cursos-service");

const cursosController = express.Router();

// GET - Buscar todos os cursos
cursosController.get("/", cursosService.retornaTodosCursos);

// POST - Criar novo curso
cursosController.post("/", cursosService.criaCurso);

// PUT - Atualizar curso existente
cursosController.put("/", cursosService.atualizaCurso);

// DELETE - Remover curso
cursosController.delete("/:id", cursosService.deletaCurso);

module.exports = cursosController;

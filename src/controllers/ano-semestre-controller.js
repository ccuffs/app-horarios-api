const express = require("express");
const anoSemestreService = require("../services/ano-semestre-service");

const anoSemestreController = express.Router();

// GET - Buscar todos os anos/semestres cadastrados
anoSemestreController.get("/", anoSemestreService.retornaTodosAnosSemestres);

// POST - Criar novo ano/semestre
anoSemestreController.post("/", anoSemestreService.criaAnoSemestre);

// PUT - Atualizar ano/semestre existente
anoSemestreController.put(
	"/:ano/:semestre",
	anoSemestreService.atualizaAnoSemestre,
);

// DELETE - Remover ano/semestre
anoSemestreController.delete(
	"/:ano/:semestre",
	anoSemestreService.deletaAnoSemestre,
);

// GET - Buscar status de publicação de um ano/semestre específico
anoSemestreController.get(
	"/:ano/:semestre/publicacao",
	anoSemestreService.retornaStatusPublicacao,
);

// PATCH - Alterar status de publicação do ano/semestre
anoSemestreController.patch(
	"/:ano/:semestre/publicacao",
	anoSemestreService.atualizaStatusPublicacao,
);

module.exports = anoSemestreController;

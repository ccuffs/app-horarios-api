const express = require("express");
const model = require("@backend/models");
const anoSemestreService = express.Router();

// GET - Buscar todos os anos/semestres cadastrados
anoSemestreService.get("/", async (req, res) => {
	try {
		const anosSemestres = await model.AnoSemestre.findAll({
			order: [['ano', 'DESC'], ['semestre', 'ASC']]
		});

		res.status(200).json({
			anosSemestres: anosSemestres,
			count: anosSemestres.length
		});
	} catch (error) {
		console.error("Erro ao buscar anos/semestres:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao buscar anos/semestres",
			error: error.message
		});
	}
});

// POST - Criar novo ano/semestre
anoSemestreService.post("/", async (req, res) => {
	try {
		const { ano, semestre } = req.body;

		// Validar dados obrigatórios
		if (!ano || !semestre) {
			return res.status(400).json({
				message: "Parâmetros obrigatórios: ano e semestre"
			});
		}

		// Verificar se já existe
		const existente = await model.AnoSemestre.findOne({
			where: { ano, semestre }
		});

		if (existente) {
			return res.status(409).json({
				message: `Ano/semestre ${ano}/${semestre} já existe`
			});
		}

		const novoAnoSemestre = await model.AnoSemestre.create({
			ano: parseInt(ano),
			semestre: parseInt(semestre)
		});

		res.status(201).json({
			message: "Ano/semestre criado com sucesso",
			anoSemestre: novoAnoSemestre
		});
	} catch (error) {
		console.error("Erro ao criar ano/semestre:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao criar ano/semestre",
			error: error.message
		});
	}
});

// DELETE - Remover ano/semestre
anoSemestreService.delete("/:ano/:semestre", async (req, res) => {
	try {
		const { ano, semestre } = req.params;

		const deleted = await model.AnoSemestre.destroy({
			where: {
				ano: parseInt(ano),
				semestre: parseInt(semestre)
			}
		});

		if (deleted) {
			res.status(200).json({
				message: `Ano/semestre ${ano}/${semestre} removido com sucesso`
			});
		} else {
			res.status(404).json({
				message: `Ano/semestre ${ano}/${semestre} não encontrado`
			});
		}
	} catch (error) {
		console.error("Erro ao deletar ano/semestre:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao deletar ano/semestre",
			error: error.message
		});
	}
});

module.exports = anoSemestreService;
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
		const { ano, semestre, inicio, fim } = req.body;

		// Validar dados obrigatórios
		if (!ano || !semestre) {
			return res.status(400).json({
				message: "Parâmetros obrigatórios: ano e semestre"
			});
		}

		// Validar se as datas são válidas (se fornecidas)
		if (inicio && isNaN(Date.parse(inicio))) {
			return res.status(400).json({
				message: "Data de início inválida"
			});
		}

		if (fim && isNaN(Date.parse(fim))) {
			return res.status(400).json({
				message: "Data de fim inválida"
			});
		}

		// Validar se data de fim é posterior à data de início
		if (inicio && fim && new Date(inicio) >= new Date(fim)) {
			return res.status(400).json({
				message: "A data de fim deve ser posterior à data de início"
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

		// Preparar dados para criação
		const dadosAnoSemestre = {
			ano: parseInt(ano),
			semestre: parseInt(semestre)
		};

		// Adicionar datas se fornecidas
		if (inicio) dadosAnoSemestre.inicio = new Date(inicio);
		if (fim) dadosAnoSemestre.fim = new Date(fim);

		const novoAnoSemestre = await model.AnoSemestre.create(dadosAnoSemestre);

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

// PUT - Atualizar ano/semestre existente
anoSemestreService.put("/:ano/:semestre", async (req, res) => {
	try {
		const { ano: anoParam, semestre: semestreParam } = req.params;
		const { inicio, fim } = req.body;

		// Validar se as datas são válidas (se fornecidas)
		if (inicio && isNaN(Date.parse(inicio))) {
			return res.status(400).json({
				message: "Data de início inválida"
			});
		}

		if (fim && isNaN(Date.parse(fim))) {
			return res.status(400).json({
				message: "Data de fim inválida"
			});
		}

		// Validar se data de fim é posterior à data de início
		if (inicio && fim && new Date(inicio) >= new Date(fim)) {
			return res.status(400).json({
				message: "A data de fim deve ser posterior à data de início"
			});
		}

		// Verificar se existe
		const anoSemestre = await model.AnoSemestre.findOne({
			where: {
				ano: parseInt(anoParam),
				semestre: parseInt(semestreParam)
			}
		});

		if (!anoSemestre) {
			return res.status(404).json({
				message: `Ano/semestre ${anoParam}/${semestreParam} não encontrado`
			});
		}

		// Preparar dados para atualização
		const dadosAtualizacao = {};
		if (inicio) dadosAtualizacao.inicio = new Date(inicio);
		if (fim) dadosAtualizacao.fim = new Date(fim);

		// Se não há dados para atualizar
		if (Object.keys(dadosAtualizacao).length === 0) {
			return res.status(400).json({
				message: "Nenhum campo fornecido para atualização"
			});
		}

		await model.AnoSemestre.update(dadosAtualizacao, {
			where: {
				ano: parseInt(anoParam),
				semestre: parseInt(semestreParam)
			}
		});

		// Buscar o registro atualizado
		const anoSemestreAtualizado = await model.AnoSemestre.findOne({
			where: {
				ano: parseInt(anoParam),
				semestre: parseInt(semestreParam)
			}
		});

		res.status(200).json({
			message: "Ano/semestre atualizado com sucesso",
			anoSemestre: anoSemestreAtualizado
		});
	} catch (error) {
		console.error("Erro ao atualizar ano/semestre:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao atualizar ano/semestre",
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
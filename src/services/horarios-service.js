const express = require("express");
const model = require("@backend/models");
const horariosService = express.Router();

// GET - Buscar horários
horariosService.get("/", async (req, res) => {
	try {
		const { ano, semestre, id_curso } = req.query;

		// Validar parâmetros obrigatórios
		if (!ano || !semestre || !id_curso) {
			return res.status(400).json({
				message: "Parâmetros obrigatórios: ano, semestre, id_curso",
			});
		}

		// Buscar horários no banco
		const horarios = await model.Horario.findAll({
			where: {
				ano: parseInt(ano),
				semestre: parseInt(semestre),
				id_curso: parseInt(id_curso),
			},
			order: [
				['dia_semana', 'ASC'],
				['hora_inicio', 'ASC'],
				['id_ccr', 'ASC'],
				['codigo_docente', 'ASC']
			],
		});

		console.log(`Encontrados ${horarios.length} horários para ano=${ano}, semestre=${semestre}, curso=${id_curso}`);

		res.status(200).json({
			message: "Horários encontrados com sucesso",
			horarios: horarios,
			count: horarios.length,
		});
	} catch (error) {
		console.error("Erro ao buscar horários:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao buscar horários",
			error: error.message
		});
	}
});

// GET - Buscar horário específico por ID
horariosService.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const horario = await model.Horario.findOne({
			where: { id }
		});

		if (!horario) {
			return res.status(404).json({
				message: `Horário com ID ${id} não encontrado`,
			});
		}

		res.status(200).json({
			message: "Horário encontrado com sucesso",
			horario: horario,
		});
	} catch (error) {
		console.error("Erro ao buscar horário por ID:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao buscar horário",
			error: error.message
		});
	}
});

// PUT - Atualizar horário específico
horariosService.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const dadosAtualizacao = req.body;

		// Verificar se o horário existe
		const horarioExistente = await model.Horario.findOne({
			where: { id }
		});

		if (!horarioExistente) {
			return res.status(404).json({
				message: `Horário com ID ${id} não encontrado`,
			});
		}

		// Atualizar o horário
		await model.Horario.update(dadosAtualizacao, {
			where: { id }
		});

		// Buscar o horário atualizado
		const horarioAtualizado = await model.Horario.findOne({
			where: { id }
		});

		res.status(200).json({
			message: "Horário atualizado com sucesso",
			horario: horarioAtualizado,
		});
	} catch (error) {
		console.error("Erro ao atualizar horário:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao atualizar horário",
			error: error.message
		});
	}
});

// DELETE - Remover horário específico
horariosService.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		// Verificar se o horário existe
		const horarioExistente = await model.Horario.findOne({
			where: { id }
		});

		if (!horarioExistente) {
			return res.status(404).json({
				message: `Horário com ID ${id} não encontrado`,
			});
		}

		// Remover o horário
		await model.Horario.destroy({
			where: { id }
		});

		res.status(200).json({
			message: "Horário removido com sucesso",
			id: id,
		});
	} catch (error) {
		console.error("Erro ao remover horário:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao remover horário",
			error: error.message
		});
	}
});

horariosService.post("/bulk", async (req, res) => {
	try {
		const horarios = req.body.horarios; // array de objetos
		if (!Array.isArray(horarios)) {
			return res
				.status(400)
				.json({
					message: "Formato inválido: esperado array de horários.",
				});
		}

		// Buscar todos os horários existentes para o mesmo ano/semestre/curso
		const { ano, semestre, id_curso } = horarios[0] || {};
		const horariosExistentes = await model.Horario.findAll({
			where: { ano, semestre, id_curso },
		});

		// Mapear por ID para facilitar comparação
		const existentesPorId = {};
		horariosExistentes.forEach((h) => {
			existentesPorId[h.id] = h;
		});

		// 1. Atualizar ou criar (upsert) os horários enviados
		for (const h of horarios) {
			await model.Horario.upsert(h);
		}

		// 2. Remover horários que existiam mas não estão mais na lista enviada
		const idsEnviados = new Set(horarios.map((h) => h.id));
		const idsParaRemover = horariosExistentes
			.filter((h) => !idsEnviados.has(h.id))
			.map((h) => h.id);

		if (idsParaRemover.length > 0) {
			await model.Horario.destroy({
				where: {
					id: idsParaRemover,
					ano,
					semestre,
					id_curso,
				},
			});
		}

		res.status(200).json({ message: "Horários salvos com sucesso!" });
	} catch (error) {
		console.error("Erro ao gravar horários em bulk:", error);
		res.status(500).json({ message: "Erro ao gravar horários em bulk." });
	}
});

module.exports = horariosService;
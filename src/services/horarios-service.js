const horariosRepository = require("../repository/horarios-repository");

// Função para retornar horários
const retornaHorarios = async (req, res) => {
	try {
		const { ano, semestre, id_curso, apenas_publicados } = req.query;

		// Validar parâmetros obrigatórios
		if (!ano || !semestre || !id_curso) {
			return res.status(400).json({
				message: "Parâmetros obrigatórios: ano, semestre, id_curso",
			});
		}

		// Se apenas_publicados=true, verificar primeiro se o ano/semestre está publicado
		if (apenas_publicados === "true") {
			const anoSemestre =
				await horariosRepository.verificarAnoSemestrePublicado(
					ano,
					semestre,
				);

			if (!anoSemestre) {
				return res.status(404).json({
					message: "Horários não publicados para este período",
					horarios: [],
					count: 0,
				});
			}
		}

		// Buscar horários no banco
		const horarios = await horariosRepository.obterHorarios(
			ano,
			semestre,
			id_curso,
		);

		res.status(200).json({
			message: "Horários encontrados com sucesso",
			horarios: horarios,
			count: horarios.length,
		});
	} catch (error) {
		console.error("Erro ao buscar horários:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao buscar horários",
			error: error.message,
		});
	}
};

// Função para retornar horário por ID
const retornaHorarioPorId = async (req, res) => {
	try {
		const { id } = req.params;

		const horario = await horariosRepository.obterHorarioPorId(id);

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
			error: error.message,
		});
	}
};

// Função para atualizar horário
const atualizaHorario = async (req, res) => {
	try {
		const { id } = req.params;
		const dadosAtualizacao = req.body;

		// Verificar se o horário existe
		const horarioExistente = await horariosRepository.obterHorarioPorId(id);

		if (!horarioExistente) {
			return res.status(404).json({
				message: `Horário com ID ${id} não encontrado`,
			});
		}

		// Atualizar o horário
		const sucesso = await horariosRepository.atualizarHorario(
			id,
			dadosAtualizacao,
		);

		if (sucesso) {
			// Buscar o horário atualizado
			const horarioAtualizado =
				await horariosRepository.obterHorarioPorId(id);

			res.status(200).json({
				message: "Horário atualizado com sucesso",
				horario: horarioAtualizado,
			});
		} else {
			res.status(404).json({
				message: `Horário com ID ${id} não encontrado`,
			});
		}
	} catch (error) {
		console.error("Erro ao atualizar horário:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao atualizar horário",
			error: error.message,
		});
	}
};

// Função para deletar horário
const deletaHorario = async (req, res) => {
	try {
		const { id } = req.params;

		// Verificar se o horário existe
		const horarioExistente = await horariosRepository.obterHorarioPorId(id);

		if (!horarioExistente) {
			return res.status(404).json({
				message: `Horário com ID ${id} não encontrado`,
			});
		}

		// Remover o horário
		const sucesso = await horariosRepository.deletarHorario(id);

		if (sucesso) {
			res.status(200).json({
				message: "Horário removido com sucesso",
				id: id,
			});
		} else {
			res.status(404).json({
				message: `Horário com ID ${id} não encontrado`,
			});
		}
	} catch (error) {
		console.error("Erro ao remover horário:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao remover horário",
			error: error.message,
		});
	}
};

// Função para salvar horários em bulk
const salvaHorariosBulk = async (req, res) => {
	try {
		const horarios = req.body.horarios; // array de objetos
		if (!Array.isArray(horarios)) {
			return res.status(400).json({
				message: "Formato inválido: esperado array de horários.",
			});
		}

		// Buscar todos os horários existentes para o mesmo ano/semestre/curso
		const { ano, semestre, id_curso } = horarios[0] || {};
		const horariosExistentes =
			await horariosRepository.obterHorariosExistentes(
				ano,
				semestre,
				id_curso,
			);

		// Mapear por ID para facilitar comparação
		const existentesPorId = {};
		horariosExistentes.forEach((h) => {
			existentesPorId[h.id] = h;
		});

		// 1. Atualizar ou criar (upsert) os horários enviados
		for (const h of horarios) {
			await horariosRepository.salvarHorario(h);
		}

		// 2. Remover horários que existiam mas não estão mais na lista enviada
		const idsEnviados = new Set(horarios.map((h) => h.id));
		const idsParaRemover = horariosExistentes
			.filter((h) => !idsEnviados.has(h.id))
			.map((h) => h.id);

		if (idsParaRemover.length > 0) {
			await horariosRepository.deletarHorariosPorIds(
				idsParaRemover,
				ano,
				semestre,
				id_curso,
			);
		}

		res.status(200).json({ message: "Horários salvos com sucesso!" });
	} catch (error) {
		console.error("Erro ao gravar horários em bulk:", error);
		res.status(500).json({ message: "Erro ao gravar horários em bulk." });
	}
};

module.exports = {
	retornaHorarios,
	retornaHorarioPorId,
	atualizaHorario,
	deletaHorario,
	salvaHorariosBulk,
};

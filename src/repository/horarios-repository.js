const model = require("@backend/models");
const { Op } = require("sequelize");
const horariosRepository = {};

const prepareHorarioPayload = (dados = {}) => {
	if (dados === null || typeof dados !== "object") {
		return dados;
	}

	const payload = { ...dados };

	if (
		Object.prototype.hasOwnProperty.call(payload, "permitirConflito") &&
		!Object.prototype.hasOwnProperty.call(payload, "permitirconflito")
	) {
		payload.permitirconflito = payload.permitirConflito;
		delete payload.permitirConflito;
	}

	return payload;
};

// Buscar horários com filtros
horariosRepository.obterHorarios = async (ano, semestre, id_curso) => {
	const horarios = await model.Horario.findAll({
		where: {
			ano: parseInt(ano),
			semestre: parseInt(semestre),
			id_curso: parseInt(id_curso),
		},
		order: [
			["id_curso", "ASC"],
			["id_ccr", "ASC"],
			["codigo_docente", "ASC"],
			["dia_semana", "ASC"],
			["fase", "ASC"],
			["hora_inicio", "ASC"],
		],
	});
	return horarios;
};

// Verificar se ano/semestre está publicado
horariosRepository.verificarAnoSemestrePublicado = async (ano, semestre) => {
	const anoSemestre = await model.AnoSemestre.findOne({
		where: {
			ano: parseInt(ano),
			semestre: parseInt(semestre),
			publicado: true,
		},
	});
	return anoSemestre;
};

// Buscar horário por ID
horariosRepository.obterHorarioPorId = async (id) => {
	const horario = await model.Horario.findOne({
		where: { id },
	});
	return horario;
};

// Atualizar horário
horariosRepository.atualizarHorario = async (id, dadosAtualizacao) => {
	const payload = prepareHorarioPayload(dadosAtualizacao);
	const [linhasAfetadas] = await model.Horario.update(payload, {
		where: { id },
	});
	return linhasAfetadas > 0;
};

// Deletar horário
horariosRepository.deletarHorario = async (id) => {
	const deleted = await model.Horario.destroy({
		where: { id },
	});
	return deleted > 0;
};

// Buscar horários existentes por ano/semestre/curso
horariosRepository.obterHorariosExistentes = async (
	ano,
	semestre,
	id_curso,
) => {
	const horarios = await model.Horario.findAll({
		where: { ano, semestre, id_curso },
	});
	return horarios;
};

// Salvar horário (upsert) - reativa registros soft-deleted
horariosRepository.salvarHorario = async (dadosHorario) => {
	try {
		const payload = prepareHorarioPayload(dadosHorario);

		// Verificar se existe um registro com o mesmo ID mas soft-deleted
		const horarioExistente = await model.Horario.findOne({
			where: {
				id: payload.id,
				deletedAt: { [Op.ne]: null },
			},
			paranoid: false, // Incluir registros soft-deleted
		});

		if (horarioExistente && horarioExistente.deletedAt) {
			// Reativar o registro existente definindo deletedAt como null
			const [linhasAfetadas] = await model.Horario.update(
				{
					...payload,
					deletedAt: null,
				},
				{
					where: { id: payload.id },
					paranoid: false,
				},
			);

			if (linhasAfetadas > 0) {
				return [await model.Horario.findByPk(payload.id), true];
			}
		}

		// Se não existe registro deletado, usar upsert normal
		const horario = await model.Horario.upsert(payload);
		return horario;
	} catch (error) {
		console.error("Erro ao salvar horário:", error);
		throw error;
	}
};

// Deletar múltiplos horários
horariosRepository.deletarHorariosPorIds = async (
	ids,
	ano,
	semestre,
	id_curso,
) => {
	const deleted = await model.Horario.destroy({
		where: {
			id: ids,
			ano,
			semestre,
			id_curso,
		},
	});
	return deleted;
};

// Verificar se existem horários vinculados a uma oferta específica
horariosRepository.verificarHorariosVinculados = async (
	ano,
	semestre,
	id_curso,
	fase,
) => {
	const count = await model.Horario.count({
		where: {
			ano: parseInt(ano),
			semestre: parseInt(semestre),
			id_curso: parseInt(id_curso),
			fase: parseInt(fase),
		},
	});
	return count > 0;
};

module.exports = horariosRepository;

const model = require("@backend/models");
const horariosRepository = {};

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
	const [linhasAfetadas] = await model.Horario.update(dadosAtualizacao, {
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

// Salvar horário (upsert)
horariosRepository.salvarHorario = async (dadosHorario) => {
	const horario = await model.Horario.upsert(dadosHorario);
	return horario;
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

module.exports = horariosRepository;

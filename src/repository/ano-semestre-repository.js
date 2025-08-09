const model = require("@backend/models");
const anoSemestreRepository = {};

// Buscar todos os anos/semestres com status de publicação (campo direto na tabela)
anoSemestreRepository.obterTodosAnosSemestres = async () => {
	const anosSemestres = await model.AnoSemestre.findAll({
		order: [
			["inicio", "DESC"],
			["ano", "DESC"],
			["semestre", "DESC"],
		],
	});

	return anosSemestres.map((anoSemestre) => ({
		ano: anoSemestre.ano,
		semestre: anoSemestre.semestre,
		inicio: anoSemestre.inicio,
		fim: anoSemestre.fim,
		publicado: !!anoSemestre.publicado,
	}));
};

// Buscar ano/semestre por ano e semestre
anoSemestreRepository.obterAnoSemestrePorAnoSemestre = async (
	ano,
	semestre,
) => {
	const anoSemestre = await model.AnoSemestre.findOne({
		where: {
			ano: parseInt(ano),
			semestre: parseInt(semestre),
		},
	});
	return anoSemestre;
};

// Verificar se ano/semestre existe
anoSemestreRepository.verificarExistencia = async (ano, semestre) => {
	const existente = await model.AnoSemestre.findOne({
		where: { ano, semestre },
	});
	return existente;
};

// Criar novo ano/semestre
anoSemestreRepository.criarAnoSemestre = async (dadosAnoSemestre) => {
	const anoSemestre = model.AnoSemestre.build(dadosAnoSemestre);
	await anoSemestre.save();
	return anoSemestre;
};

// Atualizar ano/semestre
anoSemestreRepository.atualizarAnoSemestre = async (
	ano,
	semestre,
	dadosAtualizacao,
) => {
	const [linhasAfetadas] = await model.AnoSemestre.update(dadosAtualizacao, {
		where: {
			ano: parseInt(ano),
			semestre: parseInt(semestre),
		},
	});
	return linhasAfetadas > 0;
};

// Deletar ano/semestre
anoSemestreRepository.deletarAnoSemestre = async (ano, semestre) => {
	const deleted = await model.AnoSemestre.destroy({
		where: {
			ano: parseInt(ano),
			semestre: parseInt(semestre),
		},
	});
	return deleted > 0;
};

// Buscar status de publicação
anoSemestreRepository.obterStatusPublicacao = async (ano, semestre) => {
	const registro = await model.AnoSemestre.findOne({
		where: { ano: parseInt(ano), semestre: parseInt(semestre) },
		attributes: ["publicado"],
	});
	return registro ? !!registro.publicado : false;
};

// Atualizar status de publicação
anoSemestreRepository.atualizarStatusPublicacao = async (
	ano,
	semestre,
	publicado,
) => {
	const [linhasAfetadas] = await model.AnoSemestre.update(
		{ publicado: !!publicado },
		{ where: { ano: parseInt(ano), semestre: parseInt(semestre) } },
	);
	return linhasAfetadas > 0;
};

module.exports = anoSemestreRepository;

const model = require("@backend/models");
const ccrsRepository = {};

// Buscar todos os CCRs com cursos associados
ccrsRepository.obterTodosCCRs = async () => {
	const ccrs = await model.CCR.findAll({
		include: [
			{
				model: model.Curso,
				as: "cursos",
				through: { attributes: [] }, // Excluir atributos da tabela de junção
			},
		],
		order: [["nome", "ASC"]],
	});
	return ccrs;
};

// Buscar CCR por ID
ccrsRepository.obterCCRPorId = async (id) => {
	const ccr = await model.CCR.findByPk(id);
	return ccr;
};

// Criar novo CCR
ccrsRepository.criarCCR = async (dadosCCR) => {
	const ccr = model.CCR.build(dadosCCR);
	await ccr.save();
	return ccr;
};

// Atualizar CCR
ccrsRepository.atualizarCCR = async (id, dadosCCR) => {
	const [linhasAfetadas] = await model.CCR.update(dadosCCR, {
		where: { id: id },
	});
	return linhasAfetadas > 0;
};

// Deletar CCR
ccrsRepository.deletarCCR = async (id) => {
	const deleted = await model.CCR.destroy({
		where: { id: id },
	});
	return deleted > 0;
};

// Associar CCR com cursos
ccrsRepository.associarComCursos = async (ccr, cursosSelecionados) => {
	if (cursosSelecionados && cursosSelecionados.length > 0) {
		await ccr.setCursos(cursosSelecionados);
	}
};

module.exports = ccrsRepository;

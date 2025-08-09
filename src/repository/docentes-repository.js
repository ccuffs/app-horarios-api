const model = require("@backend/models");
const docentesRepository = {};

// Buscar todos os docentes
docentesRepository.obterTodosDocentes = async () => {
	const docentes = await model.Docente.findAll({ order: [["nome", "ASC"]] });
	return docentes;
};

// Buscar docente por código
docentesRepository.obterDocentePorCodigo = async (codigo) => {
	const docente = await model.Docente.findByPk(codigo);
	return docente;
};

// Criar novo docente
docentesRepository.criarDocente = async (dadosDocente) => {
	const docente = model.Docente.build(dadosDocente);
	await docente.save();
	return docente;
};

// Atualizar docente
docentesRepository.atualizarDocente = async (codigo, dadosDocente) => {
	const [linhasAfetadas] = await model.Docente.update(dadosDocente, {
		where: { codigo: codigo },
	});
	return linhasAfetadas > 0;
};

// Deletar docente
docentesRepository.deletarDocente = async (codigo) => {
	const deleted = await model.Docente.destroy({
		where: { codigo: codigo },
	});
	return deleted > 0;
};

module.exports = docentesRepository;

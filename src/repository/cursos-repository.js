const model = require("@backend/models");
const cursosRepository = {};

// Buscar todos os cursos
cursosRepository.obterTodosCursos = async () => {
	const cursos = await model.Curso.findAll();
	return cursos;
};

// Buscar curso por ID
cursosRepository.obterCursoPorId = async (id) => {
	const curso = await model.Curso.findByPk(id);
	return curso;
};

// Criar novo curso
cursosRepository.criarCurso = async (dadosCurso) => {
	const curso = model.Curso.build(dadosCurso);
	await curso.save();
	return curso;
};

// Atualizar curso
cursosRepository.atualizarCurso = async (id, dadosCurso) => {
	const [linhasAfetadas] = await model.Curso.update(dadosCurso, {
		where: { id: id },
	});
	return linhasAfetadas > 0;
};

// Deletar curso
cursosRepository.deletarCurso = async (id) => {
	const deleted = await model.Curso.destroy({
		where: { id: id },
	});
	return deleted > 0;
};

module.exports = cursosRepository;

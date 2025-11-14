const model = require("@backend/models");
const ofertasRepository = {};

// Buscar ofertas com filtros
ofertasRepository.obterOfertas = async (whereClause) => {
	const ofertas = await model.Oferta.findAll({
		where: whereClause,
		include: [
			{
				model: model.Curso,
				as: "curso",
				attributes: ["id", "nome", "codigo"],
			},
		],
		order: [
			["ano", "DESC"],
			["semestre", "ASC"],
			["id_curso", "ASC"],
			["fase", "ASC"],
		],
	});
	return ofertas;
};

// Buscar oferta por chave composta
ofertasRepository.obterOfertaPorChave = async (
	ano,
	semestre,
	id_curso,
	fase,
) => {
	const oferta = await model.Oferta.findOne({
		where: {
			ano: parseInt(ano),
			semestre: parseInt(semestre),
			id_curso: parseInt(id_curso),
			fase: parseInt(fase),
		},
	});
	return oferta;
};

// Buscar oferta por chave composta incluindo turno
ofertasRepository.obterOfertaPorChaveComTurno = async (
	ano,
	semestre,
	id_curso,
	fase,
	turno,
) => {
	const oferta = await model.Oferta.findOne({
		where: {
			ano: parseInt(ano),
			semestre: parseInt(semestre),
			id_curso: parseInt(id_curso),
			fase: parseInt(fase),
			turno: turno,
		},
		include: [
			{
				model: model.Curso,
				as: "curso",
				attributes: ["id", "nome", "codigo"],
			},
		],
	});
	return oferta;
};

// Verificar se oferta existe
ofertasRepository.verificarExistencia = async (
	ano,
	semestre,
	id_curso,
	fase,
	turno,
) => {
	const existente = await model.Oferta.findOne({
		where: {
			ano: parseInt(ano),
			semestre: parseInt(semestre),
			id_curso: parseInt(id_curso),
			fase: parseInt(fase),
			turno: turno,
		},
	});
	return existente;
};

// Criar nova oferta
ofertasRepository.criarOferta = async (dadosOferta) => {
	const oferta = await model.Oferta.create(dadosOferta);
	return oferta;
};

// Atualizar oferta
ofertasRepository.atualizarOferta = async (
	ano,
	semestre,
	id_curso,
	fase,
	dadosAtualizacao,
) => {
	const [linhasAfetadas] = await model.Oferta.update(dadosAtualizacao, {
		where: {
			ano: parseInt(ano),
			semestre: parseInt(semestre),
			id_curso: parseInt(id_curso),
			fase: parseInt(fase),
		},
	});
	return linhasAfetadas > 0;
};

// Deletar oferta
ofertasRepository.deletarOferta = async (
	ano,
	semestre,
	id_curso,
	fase,
	turno,
) => {
	const deleted = await model.Oferta.destroy({
		where: {
			ano: parseInt(ano),
			semestre: parseInt(semestre),
			id_curso: parseInt(id_curso),
			fase: parseInt(fase),
			turno: turno,
		},
	});
	return deleted > 0;
};

// Atualizar turno usando SQL direto (quando o turno é parte da chave primária)
ofertasRepository.atualizarTurno = async (
	ano,
	semestre,
	id_curso,
	fase,
	turnoAntigo,
	turnoNovo,
) => {
	const sequelize = model.sequelize;
	const query = `
		UPDATE oferta
		SET turno = :turnoNovo
		WHERE ano = :ano
		AND semestre = :semestre
		AND id_curso = :id_curso
		AND fase = :fase
		AND turno = :turnoAntigo
	`;

	const [result, metadata] = await sequelize.query(query, {
		replacements: {
			turnoNovo: turnoNovo,
			ano: parseInt(ano),
			semestre: parseInt(semestre),
			id_curso: parseInt(id_curso),
			fase: parseInt(fase),
			turnoAntigo: turnoAntigo,
		},
	});

	// metadata.rowCount contém o número de linhas afetadas
	return metadata.rowCount === 1;
};

// Buscar oferta atualizada após mudança de turno usando SQL direto
ofertasRepository.obterOfertaAtualizadaComTurno = async (
	ano,
	semestre,
	id_curso,
	fase,
	turno,
) => {
	const sequelize = model.sequelize;
	const query = `
		SELECT
			o.ano,
			o.semestre,
			o.id_curso,
			o.fase,
			o.turno,
			o."createdAt",
			o."updatedAt",
			o."deletedAt",
			c.nome as curso_nome,
			c.codigo as curso_codigo
		FROM oferta o
		INNER JOIN curso c ON o.id_curso = c.id
		WHERE o.ano = :ano
		AND o.semestre = :semestre
		AND o.id_curso = :id_curso
		AND o.fase = :fase
		AND o.turno = :turno
	`;

	const results = await sequelize.query(query, {
		replacements: {
			ano: parseInt(ano),
			semestre: parseInt(semestre),
			id_curso: parseInt(id_curso),
			fase: parseInt(fase),
			turno: turno,
		},
		type: sequelize.QueryTypes.SELECT,
	});

	const result = results[0];

	if (result) {
		return {
			ano: result.ano,
			semestre: result.semestre,
			id_curso: result.id_curso,
			fase: result.fase,
			turno: result.turno,
			createdAt: result.createdAt,
			updatedAt: result.updatedAt,
			curso: {
				id: result.id_curso,
				nome: result.curso_nome,
				codigo: result.curso_codigo,
			},
		};
	}

	return null;
};

// Salvar múltiplas ofertas em bulk
ofertasRepository.salvarOfertasBulk = async (ofertas) => {
	const result = await model.Oferta.bulkCreate(ofertas, {
		updateOnDuplicate: ["turno"],
	});
	return result;
};

module.exports = ofertasRepository;

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
ofertasRepository.deletarOferta = async (ano, semestre, id_curso, fase) => {
	const deleted = await model.Oferta.destroy({
		where: {
			ano: parseInt(ano),
			semestre: parseInt(semestre),
			id_curso: parseInt(id_curso),
			fase: parseInt(fase),
		},
	});
	return deleted > 0;
};

// Salvar múltiplas ofertas em bulk
ofertasRepository.salvarOfertasBulk = async (ofertas) => {
	const result = await model.Oferta.bulkCreate(ofertas, {
		updateOnDuplicate: ["turno"],
	});
	return result;
};

module.exports = ofertasRepository;

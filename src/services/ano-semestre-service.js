const anoSemestreRepository = require("../repository/ano-semestre-repository");

// Função para retornar todos os anos/semestres
const retornaTodosAnosSemestres = async (req, res) => {
	try {
		const anosSemestres =
			await anoSemestreRepository.obterTodosAnosSemestres();
		res.status(200).json({
			anosSemestres: anosSemestres,
			count: anosSemestres.length,
		});
	} catch (error) {
		console.error("Erro ao buscar anos/semestres:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao buscar anos/semestres",
			error: error.message,
		});
	}
};

// Função para criar um novo ano/semestre
const criaAnoSemestre = async (req, res) => {
	try {
		const { ano, semestre, inicio, fim } = req.body;

		// Validar dados obrigatórios
		if (!ano || !semestre) {
			return res.status(400).json({
				message: "Parâmetros obrigatórios: ano e semestre",
			});
		}

		// Validar se as datas são válidas (se fornecidas)
		if (inicio && isNaN(Date.parse(inicio))) {
			return res.status(400).json({
				message: "Data de início inválida",
			});
		}

		if (fim && isNaN(Date.parse(fim))) {
			return res.status(400).json({
				message: "Data de fim inválida",
			});
		}

		// Validar se data de fim é posterior à data de início
		if (inicio && fim && new Date(inicio) >= new Date(fim)) {
			return res.status(400).json({
				message: "A data de fim deve ser posterior à data de início",
			});
		}

		// Verificar se já existe
		const existente = await anoSemestreRepository.verificarExistencia(
			ano,
			semestre,
		);

		if (existente) {
			return res.status(409).json({
				message: `Ano/semestre ${ano}/${semestre} já existe`,
			});
		}

		// Preparar dados para criação
		const dadosAnoSemestre = {
			ano: parseInt(ano),
			semestre: parseInt(semestre),
		};

		// Adicionar datas se fornecidas
		if (inicio) dadosAnoSemestre.inicio = new Date(inicio);
		if (fim) dadosAnoSemestre.fim = new Date(fim);

		const novoAnoSemestre =
			await anoSemestreRepository.criarAnoSemestre(dadosAnoSemestre);

		res.status(201).json({
			message: "Ano/semestre criado com sucesso",
			anoSemestre: novoAnoSemestre,
		});
	} catch (error) {
		console.error("Erro ao criar ano/semestre:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao criar ano/semestre",
			error: error.message,
		});
	}
};

// Função para atualizar um ano/semestre
const atualizaAnoSemestre = async (req, res) => {
	try {
		const { ano: anoParam, semestre: semestreParam } = req.params;
		const { inicio, fim } = req.body;

		// Validar se as datas são válidas (se fornecidas)
		if (inicio && isNaN(Date.parse(inicio))) {
			return res.status(400).json({
				message: "Data de início inválida",
			});
		}

		if (fim && isNaN(Date.parse(fim))) {
			return res.status(400).json({
				message: "Data de fim inválida",
			});
		}

		// Validar se data de fim é posterior à data de início
		if (inicio && fim && new Date(inicio) >= new Date(fim)) {
			return res.status(400).json({
				message: "A data de fim deve ser posterior à data de início",
			});
		}

		// Verificar se existe
		const anoSemestre =
			await anoSemestreRepository.obterAnoSemestrePorAnoSemestre(
				anoParam,
				semestreParam,
			);

		if (!anoSemestre) {
			return res.status(404).json({
				message: `Ano/semestre ${anoParam}/${semestreParam} não encontrado`,
			});
		}

		// Preparar dados para atualização
		const dadosAtualizacao = {};
		if (inicio) dadosAtualizacao.inicio = new Date(inicio);
		if (fim) dadosAtualizacao.fim = new Date(fim);

		// Se não há dados para atualizar
		if (Object.keys(dadosAtualizacao).length === 0) {
			return res.status(400).json({
				message: "Nenhum campo fornecido para atualização",
			});
		}

		const sucesso = await anoSemestreRepository.atualizarAnoSemestre(
			anoParam,
			semestreParam,
			dadosAtualizacao,
		);

		if (sucesso) {
			// Buscar o registro atualizado
			const anoSemestreAtualizado =
				await anoSemestreRepository.obterAnoSemestrePorAnoSemestre(
					anoParam,
					semestreParam,
				);

			res.status(200).json({
				message: "Ano/semestre atualizado com sucesso",
				anoSemestre: anoSemestreAtualizado,
			});
		} else {
			res.status(404).json({
				message: `Ano/semestre ${anoParam}/${semestreParam} não encontrado`,
			});
		}
	} catch (error) {
		console.error("Erro ao atualizar ano/semestre:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao atualizar ano/semestre",
			error: error.message,
		});
	}
};

// Função para deletar um ano/semestre
const deletaAnoSemestre = async (req, res) => {
	try {
		const { ano, semestre } = req.params;

		const sucesso = await anoSemestreRepository.deletarAnoSemestre(
			ano,
			semestre,
		);

		if (sucesso) {
			res.status(200).json({
				message: `Ano/semestre ${ano}/${semestre} removido com sucesso`,
			});
		} else {
			res.status(404).json({
				message: `Ano/semestre ${ano}/${semestre} não encontrado`,
			});
		}
	} catch (error) {
		console.error("Erro ao deletar ano/semestre:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao deletar ano/semestre",
			error: error.message,
		});
	}
};

// Função para retornar status de publicação
const retornaStatusPublicacao = async (req, res) => {
	try {
		const { ano, semestre } = req.params;

		// Verificar se ano/semestre existe
		const anoSemestre =
			await anoSemestreRepository.obterAnoSemestrePorAnoSemestre(
				ano,
				semestre,
			);

		if (!anoSemestre) {
			return res.status(404).json({
				message: `Ano/semestre ${ano}/${semestre} não encontrado`,
			});
		}

		// Buscar status de publicação
		const publicado = await anoSemestreRepository.obterStatusPublicacao(
			ano,
			semestre,
		);

		res.status(200).json({
			ano: parseInt(ano),
			semestre: parseInt(semestre),
			publicado,
		});
	} catch (error) {
		console.error("Erro ao buscar status de publicação:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao buscar status de publicação",
			error: error.message,
		});
	}
};

// Função para atualizar status de publicação
const atualizaStatusPublicacao = async (req, res) => {
	try {
		const { ano, semestre } = req.params;
		const { publicado } = req.body;

		// Validar parâmetro
		if (typeof publicado !== "boolean") {
			return res.status(400).json({
				message:
					"O campo 'publicado' deve ser um valor booleano (true/false)",
			});
		}

		// Verificar se ano/semestre existe
		const anoSemestre =
			await anoSemestreRepository.obterAnoSemestrePorAnoSemestre(
				ano,
				semestre,
			);

		if (!anoSemestre) {
			return res.status(404).json({
				message: `Ano/semestre ${ano}/${semestre} não encontrado`,
			});
		}

		// Atualizar status de publicação
		const sucesso = await anoSemestreRepository.atualizarStatusPublicacao(
			ano,
			semestre,
			publicado,
		);

		res.status(200).json({
			message: `Horários ${publicado ? "publicados" : "despublicados"} com sucesso`,
			ano: parseInt(ano),
			semestre: parseInt(semestre),
			publicado: !!publicado,
		});
	} catch (error) {
		console.error("Erro ao atualizar status de publicação:", error);
		res.status(500).json({
			message:
				"Erro interno do servidor ao atualizar status de publicação",
			error: error.message,
		});
	}
};

module.exports = {
	retornaTodosAnosSemestres,
	criaAnoSemestre,
	atualizaAnoSemestre,
	deletaAnoSemestre,
	retornaStatusPublicacao,
	atualizaStatusPublicacao,
};

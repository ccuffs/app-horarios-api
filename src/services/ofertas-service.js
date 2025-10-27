const ofertasRepository = require("../repository/ofertas-repository");

// Função para retornar ofertas
const retornaOfertas = async (req, res) => {
	try {
		const { ano, semestre, id_curso, fase } = req.query;

		// Montar filtros baseado nos parâmetros de query
		const whereClause = {};
		if (ano) whereClause.ano = parseInt(ano);
		if (semestre) whereClause.semestre = parseInt(semestre);
		if (id_curso) whereClause.id_curso = parseInt(id_curso);
		if (fase) whereClause.fase = parseInt(fase);

		const ofertas = await ofertasRepository.obterOfertas(whereClause);

		res.status(200).json({
			message: "Ofertas encontradas com sucesso",
			ofertas: ofertas,
			count: ofertas.length,
		});
	} catch (error) {
		console.error("Erro ao buscar ofertas:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao buscar ofertas",
			error: error.message,
		});
	}
};

// Função para criar oferta
const criaOferta = async (req, res) => {
	try {
		const { ano, semestre, id_curso, fase, turno } = req.body;

		// Validar dados obrigatórios
		if (!ano || !semestre || !id_curso || !fase) {
			return res.status(400).json({
				message:
					"Parâmetros obrigatórios: ano, semestre, id_curso, fase, período e turno",
			});
		}

		// Validar tipos de dados
		const anoInt = parseInt(ano);
		const semestreInt = parseInt(semestre);
		const idCursoInt = parseInt(id_curso);
		const faseInt = parseInt(fase);

		if (
			isNaN(anoInt) ||
			isNaN(semestreInt) ||
			isNaN(idCursoInt) ||
			isNaN(faseInt)
		) {
			return res.status(400).json({
				message:
					"Os campos ano, semestre, id_curso e fase devem ser números válidos",
			});
		}

		// Verificar se já existe
		const existente = await ofertasRepository.verificarExistencia(
			anoInt,
			semestreInt,
			idCursoInt,
			faseInt,
			turno,
		);

		if (existente) {
			return res.status(409).json({
				message: `Oferta para ano=${anoInt}, semestre=${semestreInt}, curso=${idCursoInt}, fase=${faseInt}, turno=${turno} já existe`,
			});
		}

		const novaOferta = await ofertasRepository.criarOferta({
			ano: anoInt,
			semestre: semestreInt,
			id_curso: idCursoInt,
			fase: faseInt,
			turno: turno,
		});

		res.status(201).json({
			message: "Oferta criada com sucesso",
			oferta: novaOferta,
		});
	} catch (error) {
		console.error("Erro ao criar oferta:", error);

		// Verificar se é erro de constraint/validação do banco
		if (
			error.name === "SequelizeValidationError" ||
			error.name === "SequelizeUniqueConstraintError"
		) {
			return res.status(400).json({
				message: "Erro de validação dos dados",
				error: error.message,
				details: error.errors?.map((e) => e.message) || [],
			});
		}

		res.status(500).json({
			message: "Erro interno do servidor ao criar oferta",
			error: error.message,
		});
	}
};

// Função para atualizar oferta
const atualizaOferta = async (req, res) => {
	try {
		const { ano, semestre, id_curso, fase, turno } = req.params;
		const { turno: novoTurno } = req.body;

		// Se o turno não mudou, atualizar normalmente
		if (turno === novoTurno) {
			const sucesso = await ofertasRepository.atualizarOferta(
				parseInt(ano),
				parseInt(semestre),
				parseInt(id_curso),
				parseInt(fase),
				{ turno: novoTurno },
			);

			if (sucesso) {
				const ofertaAtualizada =
					await ofertasRepository.obterOfertaPorChaveComTurno(
						parseInt(ano),
						parseInt(semestre),
						parseInt(id_curso),
						parseInt(fase),
						novoTurno,
					);

				res.status(200).json({
					message: "Oferta atualizada com sucesso",
					oferta: ofertaAtualizada,
				});
			} else {
				res.status(404).json({
					message: `Oferta não encontrada para ano=${ano}, semestre=${semestre}, curso=${id_curso}, fase=${fase}`,
				});
			}
		} else {
			// Se o turno mudou, usar SQL direto para atualizar a chave primária
			const sucesso = await ofertasRepository.atualizarTurno(
				parseInt(ano),
				parseInt(semestre),
				parseInt(id_curso),
				parseInt(fase),
				turno,
				novoTurno,
			);

			if (sucesso) {
				// Buscar usando SQL direto para evitar problemas de cache
				const ofertaAtualizada =
					await ofertasRepository.obterOfertaAtualizadaComTurno(
						parseInt(ano),
						parseInt(semestre),
						parseInt(id_curso),
						parseInt(fase),
						novoTurno,
					);

				if (ofertaAtualizada) {
					res.status(200).json({
						message: "Oferta atualizada com sucesso",
						oferta: ofertaAtualizada,
					});
				} else {
					// Se não encontrou após atualizar, retornar sucesso mesmo assim
					// pois a atualização foi bem-sucedida
					res.status(200).json({
						message: "Oferta atualizada com sucesso",
						oferta: null,
					});
				}
			} else {
				res.status(404).json({
					message: `Oferta não encontrada para ano=${ano}, semestre=${semestre}, curso=${id_curso}, fase=${fase}, turno=${turno}`,
				});
			}
		}
	} catch (error) {
		console.error("Erro ao atualizar oferta:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao atualizar oferta",
			error: error.message,
		});
	}
};

// Função para deletar oferta
const deletaOferta = async (req, res) => {
	try {
		const { ano, semestre, id_curso, fase } = req.params;

		const sucesso = await ofertasRepository.deletarOferta(
			ano,
			semestre,
			id_curso,
			fase,
		);

		if (sucesso) {
			res.status(200).json({
				message: `Oferta removida com sucesso para ano=${ano}, semestre=${semestre}, curso=${id_curso}, fase=${fase}`,
			});
		} else {
			res.status(404).json({
				message: `Oferta não encontrada para ano=${ano}, semestre=${semestre}, curso=${id_curso}, fase=${fase}`,
			});
		}
	} catch (error) {
		console.error("Erro ao deletar oferta:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao deletar oferta",
			error: error.message,
		});
	}
};

// Função para salvar ofertas em bulk
const salvaOfertasBulk = async (req, res) => {
	try {
		const ofertas = req.body.ofertas;

		if (!Array.isArray(ofertas)) {
			return res.status(400).json({
				message: "Formato inválido: esperado array de ofertas.",
			});
		}

		// Validar cada oferta
		for (const oferta of ofertas) {
			if (
				!oferta.ano ||
				!oferta.semestre ||
				!oferta.id_curso ||
				!oferta.fase
			) {
				return res.status(400).json({
					message:
						"Cada oferta deve conter: ano, semestre, id_curso, fase",
				});
			}
		}

		// Usar bulkCreate com updateOnDuplicate para criar ou atualizar
		const result = await ofertasRepository.salvarOfertasBulk(ofertas);

		res.status(200).json({
			message: "Ofertas processadas com sucesso",
			count: result.length,
		});
	} catch (error) {
		console.error("Erro ao processar ofertas em bulk:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao processar ofertas",
			error: error.message,
		});
	}
};

module.exports = {
	retornaOfertas,
	criaOferta,
	atualizaOferta,
	deletaOferta,
	salvaOfertasBulk,
};

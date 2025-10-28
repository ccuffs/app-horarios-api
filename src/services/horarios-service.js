const horariosRepository = require("../repository/horarios-repository");
const ofertasRepository = require("../repository/ofertas-repository");
const model = require("../models");

// Função para retornar horários
const retornaHorarios = async (req, res) => {
	try {
		const { ano, semestre, id_curso, apenas_publicados } = req.query;

		// Validar parâmetros obrigatórios
		if (!ano || !semestre || !id_curso) {
			return res.status(400).json({
				message: "Parâmetros obrigatórios: ano, semestre, id_curso",
			});
		}

		// Se apenas_publicados=true, verificar primeiro se o ano/semestre está publicado
		if (apenas_publicados === "true") {
			const anoSemestre =
				await horariosRepository.verificarAnoSemestrePublicado(
					ano,
					semestre,
				);

			if (!anoSemestre) {
				return res.status(404).json({
					message: "Horários não publicados para este período",
					horarios: [],
					count: 0,
				});
			}
		}

		// Buscar horários no banco
		const horarios = await horariosRepository.obterHorarios(
			ano,
			semestre,
			id_curso,
		);

		res.status(200).json({
			message: "Horários encontrados com sucesso",
			horarios: horarios,
			count: horarios.length,
		});
	} catch (error) {
		console.error("Erro ao buscar horários:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao buscar horários",
			error: error.message,
		});
	}
};

// Função para retornar horário por ID
const retornaHorarioPorId = async (req, res) => {
	try {
		const { id } = req.params;

		const horario = await horariosRepository.obterHorarioPorId(id);

		if (!horario) {
			return res.status(404).json({
				message: `Horário com ID ${id} não encontrado`,
			});
		}

		res.status(200).json({
			message: "Horário encontrado com sucesso",
			horario: horario,
		});
	} catch (error) {
		console.error("Erro ao buscar horário por ID:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao buscar horário",
			error: error.message,
		});
	}
};

// Função para atualizar horário
const atualizaHorario = async (req, res) => {
	try {
		const { id } = req.params;
		const dadosAtualizacao = req.body;

		// Verificar se o horário existe
		const horarioExistente = await horariosRepository.obterHorarioPorId(id);

		if (!horarioExistente) {
			return res.status(404).json({
				message: `Horário com ID ${id} não encontrado`,
			});
		}

		// Atualizar o horário
		const sucesso = await horariosRepository.atualizarHorario(
			id,
			dadosAtualizacao,
		);

		if (sucesso) {
			// Buscar o horário atualizado
			const horarioAtualizado =
				await horariosRepository.obterHorarioPorId(id);

			res.status(200).json({
				message: "Horário atualizado com sucesso",
				horario: horarioAtualizado,
			});
		} else {
			res.status(404).json({
				message: `Horário com ID ${id} não encontrado`,
			});
		}
	} catch (error) {
		console.error("Erro ao atualizar horário:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao atualizar horário",
			error: error.message,
		});
	}
};

// Função para deletar horário
const deletaHorario = async (req, res) => {
	try {
		const { id } = req.params;

		// Verificar se o horário existe
		const horarioExistente = await horariosRepository.obterHorarioPorId(id);

		if (!horarioExistente) {
			return res.status(404).json({
				message: `Horário com ID ${id} não encontrado`,
			});
		}

		// Remover o horário
		const sucesso = await horariosRepository.deletarHorario(id);

		if (sucesso) {
			res.status(200).json({
				message: "Horário removido com sucesso",
				id: id,
			});
		} else {
			res.status(404).json({
				message: `Horário com ID ${id} não encontrado`,
			});
		}
	} catch (error) {
		console.error("Erro ao remover horário:", error);
		res.status(500).json({
			message: "Erro interno do servidor ao remover horário",
			error: error.message,
		});
	}
};

// Função para salvar horários em bulk
const salvaHorariosBulk = async (req, res) => {
	try {
		const horarios = req.body.horarios; // array de objetos
		if (!Array.isArray(horarios)) {
			return res.status(400).json({
				message: "Formato inválido: esperado array de horários.",
			});
		}

		// Buscar todos os horários existentes para o mesmo ano/semestre/curso
		const { ano, semestre, id_curso } = horarios[0] || {};
		const horariosExistentes =
			await horariosRepository.obterHorariosExistentes(
				ano,
				semestre,
				id_curso,
			);

		// Mapear por ID para facilitar comparação
		const existentesPorId = {};
		horariosExistentes.forEach((h) => {
			existentesPorId[h.id] = h;
		});

		// 1. Atualizar ou criar (upsert) os horários enviados
		for (const h of horarios) {
			await horariosRepository.salvarHorario(h);
		}

		// 2. Remover horários que existiam mas não estão mais na lista enviada
		const idsEnviados = new Set(horarios.map((h) => h.id));
		const idsParaRemover = horariosExistentes
			.filter((h) => !idsEnviados.has(h.id))
			.map((h) => h.id);

		if (idsParaRemover.length > 0) {
			await horariosRepository.deletarHorariosPorIds(
				idsParaRemover,
				ano,
				semestre,
				id_curso,
			);
		}

		res.status(200).json({ message: "Horários salvos com sucesso!" });
	} catch (error) {
		console.error("Erro ao gravar horários em bulk:", error);
		res.status(500).json({ message: "Erro ao gravar horários em bulk." });
	}
};

// Função para sincronizar horários (aplica apenas as mudanças necessárias)
const sincronizarHorarios = async (req, res) => {
	try {
		const { novos, editados, removidos } = req.body;

		if (
			!Array.isArray(novos) ||
			!Array.isArray(editados) ||
			!Array.isArray(removidos)
		) {
			return res.status(400).json({
				message:
					"Formato inválido: esperado arrays de novos, editados e removidos.",
			});
		}

		let criados = 0;
		let atualizados = 0;
		let deletados = 0;

		// 1. Criar novos horários
		for (const horario of novos) {
			await horariosRepository.salvarHorario(horario);
			criados++;
		}

		// 2. Atualizar horários existentes
		for (const horario of editados) {
			const sucesso = await horariosRepository.atualizarHorario(
				horario.id,
				horario,
			);
			if (sucesso) {
				atualizados++;
			}
		}

		// 3. Deletar horários removidos
		for (const id of removidos) {
			const sucesso = await horariosRepository.deletarHorario(id);
			if (sucesso) {
				deletados++;
			}
		}

		res.status(200).json({
			message: "Sincronização realizada com sucesso",
			criados,
			atualizados,
			deletados,
			total: criados + atualizados + deletados,
		});
	} catch (error) {
		console.error("Erro ao sincronizar horários:", error);
		res.status(500).json({
			message: "Erro ao sincronizar horários",
			error: error.message,
		});
	}
};

// Função para buscar horários de anos/semestres anteriores para importação
const retornaHorariosParaImportacao = async (req, res) => {
	try {
		const { ano_origem, semestre_origem, id_curso } = req.query;

		// Validar parâmetros obrigatórios
		if (!ano_origem || !semestre_origem || !id_curso) {
			return res.status(400).json({
				message:
					"Parâmetros obrigatórios: ano_origem, semestre_origem, id_curso",
			});
		}

		// Buscar horários do ano/semestre de origem
		const horarios = await horariosRepository.obterHorarios(
			ano_origem,
			semestre_origem,
			id_curso,
		);

		res.status(200).json({
			message: "Horários para importação encontrados com sucesso",
			horarios: horarios,
			count: horarios.length,
		});
	} catch (error) {
		console.error("Erro ao buscar horários para importação:", error);
		res.status(500).json({
			message:
				"Erro interno do servidor ao buscar horários para importação",
			error: error.message,
		});
	}
};

// Função para importar horários de ano/semestre anterior
const importarHorarios = async (req, res) => {
	// Iniciar transação
	const transaction = await model.sequelize.transaction();

	try {
		const {
			ano_origem,
			semestre_origem,
			ano_destino,
			semestre_destino,
			id_curso,
			incluir_docentes,
			incluir_ofertas,
		} = req.body;

		// Validar parâmetros obrigatórios
		if (
			!ano_origem ||
			!semestre_origem ||
			!ano_destino ||
			!semestre_destino ||
			!id_curso
		) {
			await transaction.rollback();
			return res.status(400).json({
				message:
					"Parâmetros obrigatórios: ano_origem, semestre_origem, ano_destino, semestre_destino, id_curso",
			});
		}

		// Buscar horários do ano/semestre de origem
		const horariosOrigem = await horariosRepository.obterHorarios(
			ano_origem,
			semestre_origem,
			id_curso,
		);

		if (horariosOrigem.length === 0) {
			await transaction.rollback();
			return res.status(404).json({
				message: "Nenhum horário encontrado no ano/semestre de origem",
			});
		}

		// Preparar horários para importação
		const horariosParaImportar = horariosOrigem.map((horario, index) => {
			// Gerar ID único seguindo a mesma regra do frontend com contador para garantir unicidade
			const timestamp = Date.now();
			const novoId = `horario-${horario.fase}-${timestamp}-${index}`;

			const novoHorario = {
				id: novoId, // ID único gerado
				ano: parseInt(ano_destino),
				semestre: parseInt(semestre_destino),
				id_curso: parseInt(id_curso),
				id_ccr: horario.id_ccr,
				dia_semana: horario.dia_semana,
				fase: horario.fase,
				hora_inicio: horario.hora_inicio,
				duracao: horario.duracao,
			};

			// Definir código do docente baseado na opção selecionada
			if (incluir_docentes && horario.codigo_docente) {
				// Se solicitado incluir docentes e existe código do docente, usar o original
				novoHorario.codigo_docente = horario.codigo_docente;
			} else {
				// Se não incluir docentes, usar "sem.professor"
				novoHorario.codigo_docente = "sem.professor";
			}

			return novoHorario;
		});

		// Salvar horários importados dentro da transação
		for (const horario of horariosParaImportar) {
			await model.Horario.upsert(horario, { transaction });
		}

		// Importar ofertas se solicitado
		let ofertasImportadas = 0;
		if (incluir_ofertas) {
			// Buscar ofertas do ano/semestre de origem
			const ofertasOrigem = await ofertasRepository.obterOfertas({
				ano: parseInt(ano_origem),
				semestre: parseInt(semestre_origem),
				id_curso: parseInt(id_curso),
			});

			if (ofertasOrigem.length > 0) {
				// Preparar ofertas para importação
				const ofertasParaImportar = ofertasOrigem.map((oferta) => ({
					ano: parseInt(ano_destino),
					semestre: parseInt(semestre_destino),
					id_curso: parseInt(id_curso),
					fase: oferta.fase,
					turno: oferta.turno,
				}));

				// Salvar ofertas importadas dentro da transação
				for (const oferta of ofertasParaImportar) {
					await model.Oferta.upsert(oferta, { transaction });
				}

				ofertasImportadas = ofertasParaImportar.length;
			}
		}

		// Commit da transação se tudo ocorreu com sucesso
		await transaction.commit();

		res.status(200).json({
			message: "Importação realizada com sucesso",
			horarios_importados: horariosParaImportar.length,
			ofertas_importadas: ofertasImportadas,
			incluiu_docentes: incluir_docentes,
			incluiu_ofertas: incluir_ofertas,
		});
	} catch (error) {
		// Rollback da transação em caso de erro
		await transaction.rollback();

		console.error("Erro ao importar horários:", error);
		res.status(500).json({
			message:
				"Erro interno do servidor ao importar horários. Todas as alterações foram desfeitas.",
			error: error.message,
		});
	}
};

module.exports = {
	retornaHorarios,
	retornaHorarioPorId,
	atualizaHorario,
	deletaHorario,
	salvaHorariosBulk,
	sincronizarHorarios,
	retornaHorariosParaImportacao,
	importarHorarios,
};

const ccrsRepository = require("../repository/ccrs-repository");

// Função para retornar todos os CCRs
const retornaTodosCCRs = async (req, res) => {
	try {
		const ccrs = await ccrsRepository.obterTodosCCRs();
		res.status(200).json({ ccrs: ccrs });
	} catch (error) {
		console.log("Erro ao buscar CCRs:", error);
		res.sendStatus(500);
	}
};

// Função para criar um novo CCR
const criaCCR = async (req, res) => {
	const { formData, cursosSelecionados } = req.body;
	console.log(formData, cursosSelecionados);

	try {
		// Criar o CCR
		const ccr = await ccrsRepository.criarCCR(formData);

		// Associar com os cursos selecionados
		await ccrsRepository.associarComCursos(ccr, cursosSelecionados);

		res.sendStatus(200);
	} catch (error) {
		console.log("Erro ao criar CCR:", error);
		res.sendStatus(500);
	}
};

// Função para atualizar um CCR
const atualizaCCR = async (req, res) => {
	const { formData, cursosSelecionados } = req.body;
	try {
		// Atualizar o CCR
		const sucesso = await ccrsRepository.atualizarCCR(
			formData.id,
			formData,
		);

		if (sucesso) {
			// Buscar o CCR atualizado
			const ccr = await ccrsRepository.obterCCRPorId(formData.id);

			// Atualizar as associações com cursos
			await ccrsRepository.associarComCursos(ccr, cursosSelecionados);

			res.sendStatus(200);
		} else {
			res.status(404).send({ message: "CCR não encontrado" });
		}
	} catch (error) {
		console.log("Erro ao atualizar CCR:", error);
		res.sendStatus(500);
	}
};

// Função para deletar um CCR
const deletaCCR = async (req, res) => {
	try {
		const id = req.params.id;
		const sucesso = await ccrsRepository.deletarCCR(id);

		if (sucesso) {
			res.sendStatus(200);
		} else {
			res.status(404).send({ message: "CCR não encontrado" });
		}
	} catch (error) {
		console.error("Erro ao deletar CCR:", error);
		res.status(500).send({ message: "Erro ao deletar CCR" });
	}
};

module.exports = {
	retornaTodosCCRs,
	criaCCR,
	atualizaCCR,
	deletaCCR,
};

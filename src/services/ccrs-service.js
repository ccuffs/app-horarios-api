const express = require("express");
const model = require("@backend/models");
const ccrsService = express.Router();

ccrsService.get("/", async (req, res) => {
	try {
		const ccrs = await model.CCR.findAll({
			include: [{
				model: model.Curso,
				as: 'cursos',
				through: { attributes: [] } // Excluir atributos da tabela de junção
			}],
			order: [['nome', 'ASC']]
		});
		res.status(200).json({ ccrs: ccrs });
	} catch (error) {
		console.log("Erro ao buscar CCRs:", error);
		res.sendStatus(500);
	}
});

ccrsService.post("/", async (req, res) => {
	const { formData, cursosSelecionados } = req.body;
	console.log(formData, cursosSelecionados);

	try {
		// Criar o CCR
		const ccr = await model.CCR.create(formData);

		// Associar com os cursos selecionados
		if (cursosSelecionados && cursosSelecionados.length > 0) {
			await ccr.setCursos(cursosSelecionados);
		}

		res.sendStatus(200);
	} catch (error) {
		console.log("Erro ao criar CCR:", error);
		res.sendStatus(500);
	}
});

ccrsService.put("/", async (req, res) => {
	const { formData, cursosSelecionados } = req.body;
	try {
		// Atualizar o CCR
		await model.CCR.update(formData, {where: {id: formData.id} });

		// Buscar o CCR atualizado
		const ccr = await model.CCR.findByPk(formData.id);

		// Atualizar as associações com cursos
		if (cursosSelecionados) {
			await ccr.setCursos(cursosSelecionados);
		}

		res.sendStatus(200);
	} catch (error) {
		console.log("Erro ao atualizar CCR:", error);
		res.sendStatus(500);
	}
});

ccrsService.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const deleted = await model.CCR.destroy({
			where: { id: id },
		});

		if (deleted) {
			res.sendStatus(200);
		} else {
			res.status(404).send({ message: "CCR não encontrado" });
		}
	} catch (error) {
		console.error("Erro ao deletar CCR:", error);
		res.status(500).send({ message: "Erro ao deletar CCR" });
	}
});

module.exports = ccrsService;
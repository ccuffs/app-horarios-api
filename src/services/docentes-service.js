const express = require("express");
const model = require("@backend/models");
const docentesService = express.Router();

docentesService.get("/", async (req, res) => {
	try {
		const profs = await model.Docente.findAll({ order: [['nome', 'ASC']] });
		res.status(200).json({ docentes: profs });
	} catch (error) {
		console.log("Erro ao buscar docentes:", error);
		res.sendStatus(500);
	}
});

docentesService.post("/", async (req, res) => {
	const formData = req.body.formData;
	try {
		const prof = model.Docente.build(formData);
		await prof.save();
		res.sendStatus(200);
	} catch (error) {
		console.log("Erro ao criar docente:", error);
		res.sendStatus(500);
	}
});

docentesService.put("/", async (req, res) => {
	const formData = req.body.formData;
	try {
		await model.Docente.update(formData, { where: { id: formData.id } });
		res.sendStatus(200);
	} catch (error) {
		console.log("Erro ao atualizar docente:", error);
		res.sendStatus(500);
	}
});

docentesService.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const deleted = await model.Docente.destroy({
			where: { id: id },
		});

		if (deleted) {
			res.sendStatus(200);
		} else {
			res.status(404).send({ message: "Docente não encontrado" });
		}
	} catch (error) {
		console.error("Erro ao deletar docente:", error);
		res.status(500).send({ message: "Erro ao deletar docente" });
	}
});

module.exports = docentesService;

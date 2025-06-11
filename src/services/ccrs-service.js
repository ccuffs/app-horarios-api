const express = require("express");
const model = require("@backend/models");
const ccrsService = express.Router();

ccrsService.get("/", async (req, res) => {
	try {
		const ccrs = await model.CCR.findAll({ order: [['nome', 'ASC']] });
		res.status(200).json({ ccrs: ccrs });
	} catch (error) {
		console.log("Erro ao buscar CCRs:", error);
		res.sendStatus(500);
	}
});

ccrsService.post("/", async (req, res) => {
	const formData = req.body.formData;
	console.log(formData);
	try {
		const ccrs = model.CCR.build(formData);
		await ccrs.save();
		res.sendStatus(200);
	} catch (error) {
		console.log("Erro ao criar CCR:", error);
		res.sendStatus(500);
	}
});

ccrsService.put("/", async (req, res) => {
	const formData = req.body.formData;
	try {
		await model.CCR.update(formData, {where: {codigo: formData.codigo} });
		res.sendStatus(200);
	} catch (error) {
		console.log("Erro ao atualizar CCR:", error);
		res.sendStatus(500);
	}
});

ccrsService.delete("/:codigo", async (req, res) => {
	try {
		const codigo = req.params.codigo;
		const deleted = await model.CCR.destroy({
			where: { codigo: codigo },
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
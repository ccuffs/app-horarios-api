const express = require("express");
const model = require("@backend/models");
const usuariosService = express.Router();

// GET /api/usuarios - Buscar todos os usuários
usuariosService.get("/", async (req, res) => {
	try {
		const usuarios = await model.Usuario.findAll();
		res.status(200).json({ usuarios: usuarios });
	} catch (error) {
		console.log("Erro ao buscar usuários:", error);
		res.sendStatus(500);
	}
});

// GET /api/usuarios/:userId/cursos - Buscar cursos vinculados ao usuário
// IMPORTANTE: Esta rota deve vir ANTES da rota /:userId para evitar conflitos
usuariosService.get("/:userId/cursos", async (req, res) => {
	try {
		const { userId } = req.params;

		const usuario = await model.Usuario.findByPk(userId, {
			include: [{
				model: model.Curso,
				as: 'cursos',
				through: { attributes: [] } // Excluir atributos da tabela de junção
			}]
		});

		if (!usuario) {
			return res.status(404).json({ message: "Usuário não encontrado" });
		}

		res.status(200).json({ cursos: usuario.cursos });
	} catch (error) {
		console.log("Erro ao buscar cursos do usuário:", error);
		res.status(500).json({ message: "Erro interno do servidor" });
	}
});

// GET /api/usuarios/:userId - Buscar usuário específico
usuariosService.get("/:userId", async (req, res) => {
	try {
		const { userId } = req.params;
		const usuario = await model.Usuario.findByPk(userId);

		if (!usuario) {
			return res.status(404).json({ message: "Usuário não encontrado" });
		}

		res.status(200).json({ usuario: usuario });
	} catch (error) {
		console.log("Erro ao buscar usuário:", error);
		res.sendStatus(500);
	}
});

// POST /api/usuarios - Criar novo usuário
usuariosService.post("/", async (req, res) => {
	const formData = req.body.formData;
	try {
		const usuario = model.Usuario.build(formData);
		await usuario.save();
		res.sendStatus(200);
	} catch (error) {
		console.log("Erro ao criar usuário:", error);
		res.sendStatus(500);
	}
});

// PUT /api/usuarios - Atualizar usuário
usuariosService.put("/", async (req, res) => {
	const formData = req.body.formData;
	try {
		await model.Usuario.update(formData, {where: {id: formData.id} });
		res.sendStatus(200);
	} catch (error) {
		console.log("Erro ao atualizar usuário:", error);
		res.sendStatus(500);
	}
});

// DELETE /api/usuarios/:id - Deletar usuário
usuariosService.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const deleted = await model.Usuario.destroy({
			where: { id: id },
		});

		if (deleted) {
			res.sendStatus(200);
		} else {
			res.status(404).send({ message: "Usuário não encontrado" });
		}
	} catch (error) {
		console.error("Erro ao deletar usuário:", error);
		res.status(500).send({ message: "Erro ao deletar usuário" });
	}
});

module.exports = usuariosService;
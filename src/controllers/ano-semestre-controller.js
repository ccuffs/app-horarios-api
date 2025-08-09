const express = require("express");
const anoSemestreService = require("../services/ano-semestre-service");
const { auth } = require("../middleware/auth");
const { autorizacao } = require("../middleware/autorizacao");
const { Permissoes } = require("../enums/permissoes");

const anoSemestreController = express.Router();

// GET - Buscar todos os anos/semestres cadastrados
anoSemestreController.get(
	"/",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao([
		Permissoes.HORARIOS.VISUALIZAR,
		Permissoes.HORARIOS.VISUALIZAR_TODOS,
	]),
	anoSemestreService.retornaTodosAnosSemestres,
);

// POST - Criar novo ano/semestre
anoSemestreController.post(
	"/",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.HORARIOS.CRIAR),
	anoSemestreService.criaAnoSemestre,
);

// PUT - Atualizar ano/semestre existente
anoSemestreController.put(
	"/:ano/:semestre",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.HORARIOS.EDITAR),
	anoSemestreService.atualizaAnoSemestre,
);

// DELETE - Remover ano/semestre
anoSemestreController.delete(
	"/:ano/:semestre",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.HORARIOS.DELETAR),
	anoSemestreService.deletaAnoSemestre,
);

// GET - Buscar status de publicação de um ano/semestre específico
anoSemestreController.get(
	"/:ano/:semestre/publicacao",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao([
		Permissoes.HORARIOS.VISUALIZAR,
		Permissoes.HORARIOS.VISUALIZAR_TODOS,
	]),
	anoSemestreService.retornaStatusPublicacao,
);

// PATCH - Alterar status de publicação do ano/semestre
anoSemestreController.patch(
	"/:ano/:semestre/publicacao",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.HORARIOS.EDITAR),
	anoSemestreService.atualizaStatusPublicacao,
);

module.exports = anoSemestreController;

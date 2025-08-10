const express = require("express");
const horariosService = require("../services/horarios-service");
const { auth } = require("../middleware/auth");
const { autorizacao } = require("../middleware/autorizacao");
const { Permissoes } = require("../enums/permissoes");

const horariosController = express.Router();

// GET - Buscar horários
horariosController.get(
	"/",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao([
		Permissoes.HORARIOS.VISUALIZAR,
		Permissoes.HORARIOS.VISUALIZAR_TODOS,
	]),
	horariosService.retornaHorarios,
);

// GET - Buscar horário específico por ID
horariosController.get(
	"/:id",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao([
		Permissoes.HORARIOS.VISUALIZAR,
		Permissoes.HORARIOS.VISUALIZAR_TODOS,
	]),
	horariosService.retornaHorarioPorId,
);

// PUT - Atualizar horário específico
horariosController.put(
	"/:id",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.HORARIOS.EDITAR),
	horariosService.atualizaHorario,
);

// DELETE - Remover horário específico
horariosController.delete(
	"/:id",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.HORARIOS.DELETAR),
	horariosService.deletaHorario,
);

// POST - Criar/atualizar múltiplos horários em bulk
horariosController.post(
	"/bulk",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.HORARIOS.CRIAR),
	horariosService.salvaHorariosBulk,
);

// GET - Buscar horários de anos/semestres anteriores para importação
horariosController.get(
	"/importacao",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.HORARIOS.CRIAR),
	horariosService.retornaHorariosParaImportacao,
);

// POST - Importar horários de ano/semestre anterior
horariosController.post(
	"/importar",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.HORARIOS.CRIAR),
	horariosService.importarHorarios,
);

module.exports = horariosController;

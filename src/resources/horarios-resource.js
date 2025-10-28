const express = require("express");
const horariosService = require("../services/horarios-service");
const { auth } = require("../middleware/auth");
const { autorizacao } = require("../middleware/autorizacao");
const { Permissoes } = require("../enums/permissoes");

const horariosResource = express.Router();

// GET - Buscar horários
horariosResource.get(
	"/",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao([
		Permissoes.HORARIOS.VISUALIZAR,
		Permissoes.HORARIOS.VISUALIZAR_TODOS,
	]),
	horariosService.retornaHorarios,
);

// GET - Buscar horário específico por ID
horariosResource.get(
	"/:id",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao([
		Permissoes.HORARIOS.VISUALIZAR,
		Permissoes.HORARIOS.VISUALIZAR_TODOS,
	]),
	horariosService.retornaHorarioPorId,
);

// PUT - Atualizar horário específico
horariosResource.put(
	"/:id",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.HORARIOS.EDITAR),
	horariosService.atualizaHorario,
);

// DELETE - Remover horário específico
horariosResource.delete(
	"/:id",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.HORARIOS.DELETAR),
	horariosService.deletaHorario,
);

// POST - Criar/atualizar múltiplos horários em bulk
horariosResource.post(
	"/bulk",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.HORARIOS.CRIAR),
	horariosService.salvaHorariosBulk,
);

// POST - Sincronizar horários (aplica apenas mudanças necessárias)
horariosResource.post(
	"/sync",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.HORARIOS.CRIAR),
	horariosService.sincronizarHorarios,
);

// GET - Buscar horários de anos/semestres anteriores para importação
horariosResource.get(
	"/importacao",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.HORARIOS.CRIAR),
	horariosService.retornaHorariosParaImportacao,
);

// POST - Importar horários de ano/semestre anterior
horariosResource.post(
	"/importar",
	auth.autenticarUsuario,
	autorizacao.verificarPermissao(Permissoes.HORARIOS.CRIAR),
	horariosService.importarHorarios,
);

module.exports = horariosResource;

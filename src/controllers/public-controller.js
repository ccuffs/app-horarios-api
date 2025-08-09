const express = require("express");
const cursosService = require("../services/cursos-service");
const anoSemestreService = require("../services/ano-semestre-service");
const docentesService = require("../services/docentes-service");
const ccrsService = require("../services/ccrs-service");
const ofertasService = require("../services/ofertas-service");
const horariosService = require("../services/horarios-service");

const publicController = express.Router();

// GET - Buscar cursos (público)
publicController.get("/cursos", cursosService.retornaTodosCursos);

// GET - Buscar anos/semestres (público)
publicController.get(
	"/ano-semestre",
	anoSemestreService.retornaTodosAnosSemestres,
);

// GET - Buscar docentes (público)
publicController.get("/docentes", docentesService.retornaTodosDocentes);

// GET - Buscar CCRs (público)
publicController.get("/ccrs", ccrsService.retornaTodosCCRs);

// GET - Buscar ofertas (público)
publicController.get("/ofertas", ofertasService.retornaOfertas);

// GET - Buscar horários (apenas publicados)
publicController.get("/horarios", horariosService.retornaHorarios);

module.exports = publicController;

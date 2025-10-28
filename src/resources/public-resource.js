const express = require("express");
const cursosService = require("../services/cursos-service");
const anoSemestreService = require("../services/ano-semestre-service");
const docentesService = require("../services/docentes-service");
const ccrsService = require("../services/ccrs-service");
const ofertasService = require("../services/ofertas-service");
const horariosService = require("../services/horarios-service");

const publicResource = express.Router();

// GET - Buscar cursos (público)
publicResource.get("/cursos", cursosService.retornaTodosCursos);

// GET - Buscar anos/semestres (público)
publicResource.get(
	"/ano-semestre",
	anoSemestreService.retornaTodosAnosSemestres,
);

// GET - Buscar docentes (público)
publicResource.get("/docentes", docentesService.retornaTodosDocentes);

// GET - Buscar CCRs (público)
publicResource.get("/ccrs", ccrsService.retornaTodosCCRs);

// GET - Buscar ofertas (público)
publicResource.get("/ofertas", ofertasService.retornaOfertas);

// GET - Buscar horários (apenas publicados)
publicResource.get("/horarios", horariosService.retornaHorarios);

module.exports = publicResource;


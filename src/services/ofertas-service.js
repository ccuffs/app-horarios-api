const express = require("express");
const model = require("@backend/models");
const ofertasService = express.Router();

// GET - Buscar todas as ofertas ou filtrar por parâmetros
ofertasService.get("/", async (req, res) => {
    try {
        const { ano, semestre, id_curso, fase } = req.query;

        // Montar filtros baseado nos parâmetros de query
        const whereClause = {};
        if (ano) whereClause.ano = parseInt(ano);
        if (semestre) whereClause.semestre = parseInt(semestre);
        if (id_curso) whereClause.id_curso = parseInt(id_curso);
        if (fase) whereClause.fase = parseInt(fase);

        const ofertas = await model.Oferta.findAll({
            where: whereClause,
            include: [
                {
                    model: model.Curso,
                    as: 'curso',
                    attributes: ['id', 'nome', 'codigo']
                }
            ],
            order: [
                ['ano', 'DESC'],
                ['semestre', 'ASC'],
                ['id_curso', 'ASC'],
                ['fase', 'ASC']
            ]
        });

        res.status(200).json({
            message: "Ofertas encontradas com sucesso",
            ofertas: ofertas,
            count: ofertas.length
        });
    } catch (error) {
        console.error("Erro ao buscar ofertas:", error);
        res.status(500).json({
            message: "Erro interno do servidor ao buscar ofertas",
            error: error.message
        });
    }
});

// POST - Criar nova oferta
ofertasService.post("/", async (req, res) => {
    try {
        const { ano, semestre, id_curso, fase, turno } = req.body;

        // Validar dados obrigatórios
        if (!ano || !semestre || !id_curso || !fase) {
            return res.status(400).json({
                message: "Parâmetros obrigatórios: ano, semestre, id_curso, fase, período e turno"
            });
        }

        // Validar tipos de dados
        const anoInt = parseInt(ano);
        const semestreInt = parseInt(semestre);
        const idCursoInt = parseInt(id_curso);
        const faseInt = parseInt(fase);

        if (isNaN(anoInt) || isNaN(semestreInt) || isNaN(idCursoInt) || isNaN(faseInt)) {
            return res.status(400).json({
                message: "Os campos ano, semestre, id_curso e fase devem ser números válidos"
            });
        }

        // Verificar se já existe
        const existente = await model.Oferta.findOne({
            where: {
                ano: anoInt,
                semestre: semestreInt,
                id_curso: idCursoInt,
                fase: faseInt,
                turno: turno
            }
        });

        if (existente) {
            return res.status(409).json({
                message: `Oferta para ano=${anoInt}, semestre=${semestreInt}, curso=${idCursoInt}, fase=${faseInt}, turno=${turno} já existe`
            });
        }

        const novaOferta = await model.Oferta.create({
            ano: anoInt,
            semestre: semestreInt,
            id_curso: idCursoInt,
            fase: faseInt,
            turno: turno
        });

        res.status(201).json({
            message: "Oferta criada com sucesso",
            oferta: novaOferta
        });
    } catch (error) {
        console.error("Erro ao criar oferta:", error);

        // Verificar se é erro de constraint/validação do banco
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({
                message: "Erro de validação dos dados",
                error: error.message,
                details: error.errors?.map(e => e.message) || []
            });
        }

        res.status(500).json({
            message: "Erro interno do servidor ao criar oferta",
            error: error.message
        });
    }
});

// PUT - Atualizar oferta existente
ofertasService.put("/:ano/:semestre/:id_curso/:fase", async (req, res) => {
    try {
        const { ano, semestre, id_curso, fase } = req.params;
        const { turno } = req.body;

        const oferta = await model.Oferta.findOne({
            where: {
                ano: parseInt(ano),
                semestre: parseInt(semestre),
                id_curso: parseInt(id_curso),
                fase: parseInt(fase)
            }
        });

        if (!oferta) {
            return res.status(404).json({
                message: `Oferta não encontrada para ano=${ano}, semestre=${semestre}, curso=${id_curso}, fase=${fase}`
            });
        }

        await oferta.update({ turno });

        res.status(200).json({
            message: "Oferta atualizada com sucesso",
            oferta: oferta
        });
    } catch (error) {
        console.error("Erro ao atualizar oferta:", error);
        res.status(500).json({
            message: "Erro interno do servidor ao atualizar oferta",
            error: error.message
        });
    }
});

// DELETE - Remover oferta
ofertasService.delete("/:ano/:semestre/:id_curso/:fase", async (req, res) => {
    try {
        const { ano, semestre, id_curso, fase } = req.params;

        const deleted = await model.Oferta.destroy({
            where: {
                ano: parseInt(ano),
                semestre: parseInt(semestre),
                id_curso: parseInt(id_curso),
                fase: parseInt(fase)
            }
        });

        if (deleted) {
            res.status(200).json({
                message: `Oferta removida com sucesso para ano=${ano}, semestre=${semestre}, curso=${id_curso}, fase=${fase}`
            });
        } else {
            res.status(404).json({
                message: `Oferta não encontrada para ano=${ano}, semestre=${semestre}, curso=${id_curso}, fase=${fase}`
            });
        }
    } catch (error) {
        console.error("Erro ao deletar oferta:", error);
        res.status(500).json({
            message: "Erro interno do servidor ao deletar oferta",
            error: error.message
        });
    }
});

// POST - Criar múltiplas ofertas em bulk
ofertasService.post("/bulk", async (req, res) => {
    try {
        const ofertas = req.body.ofertas;

        if (!Array.isArray(ofertas)) {
            return res.status(400).json({
                message: "Formato inválido: esperado array de ofertas."
            });
        }

        // Validar cada oferta
        for (const oferta of ofertas) {
            if (!oferta.ano || !oferta.semestre || !oferta.id_curso || !oferta.fase) {
                return res.status(400).json({
                    message: "Cada oferta deve conter: ano, semestre, id_curso, fase"
                });
            }
        }

        // Usar bulkCreate com updateOnDuplicate para criar ou atualizar
        const result = await model.Oferta.bulkCreate(ofertas, {
            updateOnDuplicate: ['turno']
        });

        res.status(200).json({
            message: "Ofertas processadas com sucesso",
            count: result.length
        });
    } catch (error) {
        console.error("Erro ao processar ofertas em bulk:", error);
        res.status(500).json({
            message: "Erro interno do servidor ao processar ofertas",
            error: error.message
        });
    }
});

module.exports = ofertasService;
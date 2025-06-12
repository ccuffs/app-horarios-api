"use strict";

module.exports = (sequelize, DataTypes) => {
	const Horario = sequelize.define(
		"Horario",
		{
			id_curso: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
					model: "curso",
					key: "id"
				}
			},
			id_ccr: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
					model: "ccr",
					key: "id"
				}
			},
			codigo_docente: {
				type: DataTypes.STRING,
				primaryKey: true,
				allowNull: false,
				references: {
					model: "docente",
					key: "codigo"
				}
			},
			ano: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false
			},
			semestre: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false
			},
			fase: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false
			},
			dia_semana: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false
			},
			hora_inicio: DataTypes.TIME,
			duracao: DataTypes.INTEGER,
			comentario: DataTypes.STRING,
			id: { type: DataTypes.STRING, allowNull: false }
		},
		{
			sequelize,
			tableName: "horario",
			schema: "public",
			freezeTableName: true,
			timestamps: false,
		},
	);

	// Definir associações
	Horario.associate = function(models) {
		// Associações com as tabelas relacionadas
		Horario.belongsTo(models.Curso, {
			foreignKey: 'id_curso',
			as: 'curso'
		});

		Horario.belongsTo(models.CCR, {
			foreignKey: 'id_ccr',
			as: 'ccr'
		});

		Horario.belongsTo(models.Docente, {
			foreignKey: 'codigo_docente',
			as: 'docente'
		});

		// Associação composta com AnoSemestre (manual)
		// Usaremos métodos customizados para isso
	};

		// Método para buscar horários com dados do ano/semestre
	Horario.findWithAnoSemestre = async function(whereClause = {}) {
		const horarios = await this.findAll({
			where: whereClause,
			raw: true
		});

		if (horarios.length === 0) return [];

		// Buscar dados únicos de ano/semestre
		const anosSemestres = [...new Set(horarios.map(h => `${h.ano}-${h.semestre}`))];
		const { AnoSemestre } = require('./index');
		const { Op } = require('sequelize');

		const anoSemestreData = await AnoSemestre.findAll({
			where: {
				[Op.or]: anosSemestres.map(as => {
					const [ano, semestre] = as.split('-');
					return { ano: parseInt(ano), semestre: parseInt(semestre) };
				})
			},
			raw: true
		});

		// Mapear dados do ano/semestre para cada horário
		return horarios.map(horario => ({
			...horario,
			anoSemestre: anoSemestreData.find(as =>
				as.ano === horario.ano && as.semestre === horario.semestre
			)
		}));
	};

	return Horario;
};

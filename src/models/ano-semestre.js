"use strict";

module.exports = (sequelize, DataTypes) => {
	const AnoSemestre = sequelize.define(
		"AnoSemestre",
		{
			ano: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
			semestre: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
			inicio: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: DataTypes.NOW
			},
			fim: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: DataTypes.NOW
			}
		},
		{
			sequelize,
			tableName: "ano_semestre",
			schema: "public",
			freezeTableName: true,
			timestamps: false,
		},
	);

	// Definir associações
	AnoSemestre.associate = function(models) {
		// Associação com HorarioPublicado
		AnoSemestre.hasOne(models.HorarioPublicado, {
			foreignKey: ['ano', 'semestre'],
			sourceKey: ['ano', 'semestre'],
			as: 'horarioPublicado'
		});
	};

	// Método para buscar ano/semestre com seus horários
	AnoSemestre.findWithHorarios = async function(ano, semestre, whereClause = {}) {
		const anoSemestre = await this.findOne({
			where: { ano, semestre },
			raw: true
		});

		if (!anoSemestre) return null;

		const { Horario } = require('./index');
		const horarios = await Horario.findAll({
			where: {
				ano,
				semestre,
				...whereClause
			},
			raw: true
		});

		return {
			...anoSemestre,
			horarios
		};
	};

	return AnoSemestre;
};

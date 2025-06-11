"use strict";

module.exports = (sequelize, DataTypes) => {
	const AnoSemestre = sequelize.define(
		"AnoSemestre",
		{
			ano: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
			semestre: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false }
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
		// Para chaves compostas, é melhor usar queries manuais
		// ou criar um campo único para a associação
		// Por enquanto, vamos remover a associação automática
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

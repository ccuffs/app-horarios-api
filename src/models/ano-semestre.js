"use strict";

module.exports = (sequelize, DataTypes) => {
	const AnoSemestre = sequelize.define(
		"AnoSemestre",
		{
			ano: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
			},
			semestre: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
			},
			inicio: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: DataTypes.NOW,
			},
			fim: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: DataTypes.NOW,
			},
			publicado: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
				defaultValue: false,
			},
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
			},
			deletedAt: {
				allowNull: true,
				type: DataTypes.DATE,
			},
		},
		{
			sequelize,
			tableName: "ano_semestre",
			schema: "public",
			freezeTableName: true,
			timestamps: true,
			paranoid: true,
		},
	);

	// Definir associações (nenhuma associação direta necessária)
	AnoSemestre.associate = function () {};

	// Método para buscar ano/semestre com seus horários
	AnoSemestre.findWithHorarios = async function (
		ano,
		semestre,
		whereClause = {},
	) {
		const anoSemestre = await this.findOne({
			where: { ano, semestre },
			raw: true,
		});

		if (!anoSemestre) return null;

		const { Horario } = require("./index");
		const horarios = await Horario.findAll({
			where: {
				ano,
				semestre,
				...whereClause,
			},
			raw: true,
		});

		return {
			...anoSemestre,
			horarios,
		};
	};

	return AnoSemestre;
};

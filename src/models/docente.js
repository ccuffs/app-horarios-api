"use strict";

module.exports = (sequelize, DataTypes) => {
	const Docente = sequelize.define(
		"Docente",
		{
			codigo: {
				type: DataTypes.TEXT,
				primaryKey: true,
			},
			email: DataTypes.TEXT,
			nome: DataTypes.TEXT,
			sala: DataTypes.INTEGER,
		},
		{
			sequelize,
			tableName: "docentes",
			schema: "public",
			freezeTableName: true,
			timestamps: false,
		},
	);

	return Docente;
};

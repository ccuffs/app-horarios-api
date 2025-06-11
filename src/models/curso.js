"use strict";

module.exports = (sequelize, DataTypes) => {
	const Curso = sequelize.define(
		"Curso",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			codigo: DataTypes.INTEGER,
			nome: DataTypes.TEXT,
			turno: DataTypes.TEXT,
		},
		{
			sequelize,
			tableName: "cursos",
			schema: "public",
			freezeTableName: true,
			timestamps: false,
		},
	);

	return Curso;
};

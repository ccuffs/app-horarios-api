"use strict";

module.exports = (sequelize, DataTypes) => {
	const CCR = sequelize.define(
		"CCR",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			codigo: DataTypes.TEXT,
			nome: DataTypes.TEXT,
			ementa: DataTypes.TEXT,
		},
		{
			sequelize,
			tableName: "ccrs",
			schema: "public",
			freezeTableName: true,
			timestamps: false,
		},
	);

	return CCR;
};

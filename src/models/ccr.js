"use strict";

module.exports = (sequelize, DataTypes) => {
	const CCR = sequelize.define(
		"CCR",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			codigo: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			nome: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			ementa: DataTypes.STRING,
		},
		{
			sequelize,
			tableName: "ccr",
			schema: "public",
			freezeTableName: true,
			timestamps: false,
		},
	);

	CCR.associate = function(models) {
		// Associação many-to-many com Curso através da tabela curso_ccr
		CCR.belongsToMany(models.Curso, {
			through: models.CursoCcr,
			foreignKey: 'id_ccr',
			otherKey: 'id_curso',
			as: 'cursos'
		});

		// Associação com Horario
		CCR.hasMany(models.Horario, {
			foreignKey: 'id_ccr',
			as: 'horarios'
		});
	};

	return CCR;
};

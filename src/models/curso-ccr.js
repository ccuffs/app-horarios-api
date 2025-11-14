"use strict";

module.exports = (sequelize, DataTypes) => {
	const CursoCcr = sequelize.define(
		"CursoCcr",
		{
			id_curso: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
					model: "curso",
					key: "id",
				},
			},
			id_ccr: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
					model: "ccr",
					key: "id",
				},
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
		},
		{
			sequelize,
			tableName: "curso_ccr",
			schema: "public",
			freezeTableName: true,
			timestamps: true,
		},
	);

	CursoCcr.associate = function (models) {
		// Associações corretas para tabela de junção
		CursoCcr.belongsTo(models.Curso, {
			foreignKey: "id_curso",
			targetKey: "id",
			as: "curso",
		});

		CursoCcr.belongsTo(models.CCR, {
			foreignKey: "id_ccr",
			targetKey: "id",
			as: "ccr",
		});
	};

	return CursoCcr;
};

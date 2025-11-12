"use strict";

module.exports = (sequelize, DataTypes) => {
	const Docente = sequelize.define(
		"Docente",
		{
			codigo: {
				type: DataTypes.STRING,
				primaryKey: true,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			nome: DataTypes.STRING,
			sala: DataTypes.INTEGER,
			id_usuario: {
				type: DataTypes.STRING,
				allowNull: true,
				references: {
					model: "usuario",
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
		tableName: "docente",
		schema: "public",
		freezeTableName: true,
		timestamps: true,
	},
	);

	Docente.associate = function (models) {
		// Associação many-to-many com Curso através da tabela docente_curso
		Docente.belongsToMany(models.Curso, {
			through: models.DocenteCurso,
			foreignKey: "codigo_docente",
			otherKey: "id_curso",
			as: "cursos",
		});

		// Associação com Horario
		Docente.hasMany(models.Horario, {
			foreignKey: "codigo_docente",
			as: "horarios",
		});

		// Associação com Usuario (FK opcional)
		Docente.belongsTo(models.Usuario, {
			foreignKey: "id_usuario",
			as: "usuario",
		});
	};

	return Docente;
};

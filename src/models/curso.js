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
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE,
			defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
		},
		updatedAt: {
			allowNull: false,
			type: DataTypes.DATE,
			defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
		},
		deletedAt: {
			allowNull: true,
			type: DataTypes.DATE,
		},
	},
	{
		sequelize,
		tableName: "curso",
		schema: "public",
		freezeTableName: true,
		timestamps: true,
	},
	);

	Curso.associate = function (models) {
		// Associação many-to-many com Docente através da tabela docente_curso
		Curso.belongsToMany(models.Docente, {
			through: models.DocenteCurso,
			foreignKey: "id_curso",
			otherKey: "codigo_docente",
			as: "docentes",
		});

		// Associação many-to-many com CCR através da tabela curso_ccr
		Curso.belongsToMany(models.CCR, {
			through: models.CursoCcr,
			foreignKey: "id_curso",
			otherKey: "id_ccr",
			as: "ccrs",
		});

		// Associação many-to-many com Usuario através da tabela usuario_curso
		Curso.belongsToMany(models.Usuario, {
			through: models.UsuarioCurso,
			foreignKey: "id_curso",
			otherKey: "id_usuario",
			as: "usuarios",
		});

		// Associações com outras tabelas
		Curso.hasMany(models.Horario, {
			foreignKey: "id_curso",
			as: "horarios",
		});

		Curso.hasMany(models.Oferta, {
			foreignKey: "id_curso",
			as: "ofertas",
		});
	};

	return Curso;
};

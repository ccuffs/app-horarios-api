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
			tableName: "curso",
			schema: "public",
			freezeTableName: true,
			timestamps: false,
		},
	);

	Curso.associate = function(models) {
		// Associação many-to-many com Docente através da tabela docente_curso
		Curso.belongsToMany(models.Docente, {
			through: models.DocenteCurso,
			foreignKey: 'id_curso',
			otherKey: 'codigo_docente',
			as: 'docentes'
		});

		// Associação many-to-many com CCR através da tabela curso_ccr
		Curso.belongsToMany(models.CCR, {
			through: models.CursoCcr,
			foreignKey: 'id_curso',
			otherKey: 'id_ccr',
			as: 'ccrs'
		});

		// Associações com outras tabelas
		Curso.hasMany(models.Horario, {
			foreignKey: 'id_curso',
			as: 'horarios'
		});

		Curso.hasMany(models.Oferta, {
			foreignKey: 'id_curso',
			as: 'ofertas'
		});
	};

	return Curso;
};

"use strict";
module.exports = {
	table: {
		schema: "public",
		tableName: "docente_curso",
	},

	getTableData(Sequelize) {
		return {
			id_curso: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
					model: {
						schema: "public",
						tableName: "curso",
					},
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
		codigo_docente: {
			type: Sequelize.STRING,
			primaryKey: true,
			allowNull: false,
			references: {
				model: {
					schema: "public",
					tableName: "docente",
				},
				key: "codigo",
			},
			onUpdate: "CASCADE",
			onDelete: "CASCADE",
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
			defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
			defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
		},
		deletedAt: {
			allowNull: true,
			type: Sequelize.DATE,
		},
	};
},

	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			this.table,
			this.getTableData(Sequelize),
		);

		// Criar trigger para esta tabela
		await queryInterface.sequelize.query(`
			CREATE TRIGGER update_docente_curso_updated_at
			BEFORE UPDATE ON public.docente_curso
			FOR EACH ROW
			EXECUTE FUNCTION update_updated_at_column();
		`);
	},

	async down(queryInterface, Sequelize) {
		// Remover trigger
		await queryInterface.sequelize.query(`
			DROP TRIGGER IF EXISTS update_docente_curso_updated_at ON public.docente_curso;
		`);

		await queryInterface.dropTable(this.table);
	},
};


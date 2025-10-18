"use strict";
module.exports = {
	table: {
		schema: "public",
		tableName: "usuario_curso",
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
		id_usuario: {
			type: Sequelize.STRING,
			primaryKey: true,
			allowNull: false,
			references: {
				model: {
					schema: "public",
					tableName: "usuario",
				},
				key: "id",
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
			CREATE TRIGGER update_usuario_curso_updated_at
			BEFORE UPDATE ON public.usuario_curso
			FOR EACH ROW
			EXECUTE FUNCTION update_updated_at_column();
		`);
	},

	async down(queryInterface, Sequelize) {
		// Remover trigger
		await queryInterface.sequelize.query(`
			DROP TRIGGER IF EXISTS update_usuario_curso_updated_at ON public.usuario_curso;
		`);

		await queryInterface.dropTable(this.table);
	},
};


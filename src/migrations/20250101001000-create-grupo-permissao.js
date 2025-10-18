"use strict";
module.exports = {
	table: {
		schema: "public",
		tableName: "grupo_permissao",
	},

	getTableData(Sequelize) {
		return {
			id_grupo: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
					model: {
						schema: "public",
						tableName: "grupo",
					},
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
		id_permissao: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			allowNull: false,
			references: {
				model: {
					schema: "public",
					tableName: "permissao",
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
			CREATE TRIGGER update_grupo_permissao_updated_at
			BEFORE UPDATE ON public.grupo_permissao
			FOR EACH ROW
			EXECUTE FUNCTION update_updated_at_column();
		`);
	},

	async down(queryInterface, Sequelize) {
		// Remover trigger
		await queryInterface.sequelize.query(`
			DROP TRIGGER IF EXISTS update_grupo_permissao_updated_at ON public.grupo_permissao;
		`);

		await queryInterface.dropTable(this.table);
	},
};


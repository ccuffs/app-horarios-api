"use strict";
module.exports = {
	table: {
		schema: "public",
		tableName: "categoria_permissao",
	},

	getTableData(Sequelize) {
		return {
			codigo: {
				type: Sequelize.STRING,
				primaryKey: true,
				allowNull: false,
			},
			descricao: {
				type: Sequelize.STRING,
				allowNull: false,
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
		};
	},

	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			this.table,
			this.getTableData(Sequelize),
		);

		// Criar trigger para esta tabela
		await queryInterface.sequelize.query(`
			CREATE TRIGGER update_categoria_permissao_updated_at
			BEFORE UPDATE ON public.categoria_permissao
			FOR EACH ROW
			EXECUTE FUNCTION update_updated_at_column();
		`);
	},

	async down(queryInterface, Sequelize) {
		// Remover trigger
		await queryInterface.sequelize.query(`
			DROP TRIGGER IF EXISTS update_categoria_permissao_updated_at ON public.categoria_permissao;
		`);

		await queryInterface.dropTable(this.table);
	},
};

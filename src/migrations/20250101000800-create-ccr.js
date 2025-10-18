"use strict";
module.exports = {
	table: {
		schema: "public",
		tableName: "ccr",
	},

	getTableData(Sequelize) {
		return {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			codigo: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			nome: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			ementa: {
				type: Sequelize.STRING,
				allowNull: true,
			},
		creditos: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 4,
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
			CREATE TRIGGER update_ccr_updated_at
			BEFORE UPDATE ON public.ccr
			FOR EACH ROW
			EXECUTE FUNCTION update_updated_at_column();
		`);
	},

	async down(queryInterface, Sequelize) {
		// Remover trigger
		await queryInterface.sequelize.query(`
			DROP TRIGGER IF EXISTS update_ccr_updated_at ON public.ccr;
		`);

		await queryInterface.dropTable(this.table);
	},
};


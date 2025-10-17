"use strict";
module.exports = {
	table: {
		schema: "horarios",
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
		};
	},

	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			this.table,
			this.getTableData(Sequelize),
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable(this.table);
	},
};


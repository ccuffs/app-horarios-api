"use strict";
module.exports = {
	table: {
		schema: "public",
		tableName: "curso",
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
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			nome: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			turno: {
				type: Sequelize.STRING,
				allowNull: true,
			},
		coordenador: {
			type: Sequelize.STRING,
			allowNull: true,
			references: {
				model: {
					schema: "public",
					tableName: "docente",
				},
				key: "codigo",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
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
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable(this.table);
	},
};


"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.sequelize.query(
			`CREATE SCHEMA IF NOT EXISTS public;`,
		);
	},

	async down(queryInterface, Sequelize) {
		// Schema public é padrão e não deve ser removido
	},
};


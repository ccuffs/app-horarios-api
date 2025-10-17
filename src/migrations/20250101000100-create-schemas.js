"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.sequelize.query(
			`CREATE SCHEMA IF NOT EXISTS public;`,
		);

		await queryInterface.sequelize.query(
			`CREATE SCHEMA IF NOT EXISTS horarios;`,
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.sequelize.query(
			`DROP SCHEMA IF EXISTS horarios CASCADE;`,
		);
	},
};


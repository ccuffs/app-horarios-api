"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"grupo",
			[
				{
					id: 1,
					nome: "admin",
					descricao: "Administrador do sistema.",
					sistema: true,
					createdAt: new Date("2025-10-18T20:00:31.238Z"),
					updatedAt: new Date("2025-10-18T20:00:31.238Z"),
				},
				{
					id: 2,
					nome: "coordenador",
					descricao: "Coordenador do curso.",
					sistema: true,
					createdAt: new Date("2025-10-18T20:00:31.238Z"),
					updatedAt: new Date("2025-10-18T20:00:31.238Z"),
				},
				{
					id: 3,
					nome: "professor",
					descricao: "Professor do curso.",
					sistema: true,
					createdAt: new Date("2025-10-18T20:00:31.238Z"),
					updatedAt: new Date("2025-10-18T20:00:31.238Z"),
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("grupo", null, {});
	},
};

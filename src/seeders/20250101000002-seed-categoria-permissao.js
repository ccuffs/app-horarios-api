"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"categoria_permissao",
			[
				{
					codigo: "HORARIOS",
					descricao: "Tela de construção de horários.",
					createdAt: new Date("2025-10-18T19:12:59.213Z"),
					updatedAt: new Date("2025-10-18T19:12:59.213Z"),
					deletedAt: null,
				},
				{
					codigo: "DOCENTES",
					descricao: "Tela de docentes.",
					createdAt: new Date("2025-10-18T19:12:59.213Z"),
					updatedAt: new Date("2025-10-18T19:12:59.213Z"),
					deletedAt: null,
				},
				{
					codigo: "OFERTAS-CURSO",
					descricao: "Tela de ofertas de semestralização do curso.",
					createdAt: new Date("2025-10-18T19:12:59.213Z"),
					updatedAt: new Date("2025-10-18T19:12:59.213Z"),
					deletedAt: null,
				},
				{
					codigo: "CCR",
					descricao: "Tela de ajustre de CCRs.",
					createdAt: new Date("2025-10-18T19:12:59.213Z"),
					updatedAt: new Date("2025-10-18T19:12:59.213Z"),
					deletedAt: null,
				},
				{
					codigo: "CURSO",
					descricao: "Tela de cursos.",
					createdAt: new Date("2025-10-18T19:41:53.708Z"),
					updatedAt: new Date("2025-10-18T19:41:53.708Z"),
					deletedAt: null,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("categoria_permissao", null, {});
	},
};


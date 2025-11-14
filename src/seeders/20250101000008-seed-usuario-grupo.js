"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"usuario_grupo",
			[
				{
					id_grupo: 1,
					id_usuario: "gian",
					createdAt: new Date("2025-10-18T20:00:31.264Z"),
					updatedAt: new Date("2025-10-18T20:00:31.264Z"),
				},
				{
					id_grupo: 2,
					id_usuario: "claunir.pavan",
					createdAt: new Date("2025-10-18T20:00:31.268Z"),
					updatedAt: new Date("2025-10-18T20:00:31.268Z"),
				},
				{
					id_grupo: 3,
					id_usuario: "lcaimi",
					createdAt: new Date("2025-10-18T20:00:31.273Z"),
					updatedAt: new Date("2025-10-18T20:00:31.273Z"),
				},
				{
					id_grupo: 3,
					id_usuario: "andrei.braga",
					createdAt: new Date("2025-10-18T20:00:31.273Z"),
					updatedAt: new Date("2025-10-18T20:00:31.273Z"),
				},
				{
					id_grupo: 3,
					id_usuario: "felipe.grando",
					createdAt: new Date("2025-10-18T20:00:31.273Z"),
					updatedAt: new Date("2025-10-18T20:00:31.273Z"),
				},
				{
					id_grupo: 3,
					id_usuario: "samuel.feitosa",
					createdAt: new Date("2025-10-18T20:00:31.273Z"),
					updatedAt: new Date("2025-10-18T20:00:31.273Z"),
				},
				{
					id_grupo: 3,
					id_usuario: "braulio",
					createdAt: new Date("2025-10-18T20:00:31.273Z"),
					updatedAt: new Date("2025-10-18T20:00:31.273Z"),
				},
				{
					id_grupo: 3,
					id_usuario: "duarte",
					createdAt: new Date("2025-10-18T20:00:31.273Z"),
					updatedAt: new Date("2025-10-18T20:00:31.273Z"),
				},
				{
					id_grupo: 3,
					id_usuario: "guilherme.dalbianco",
					createdAt: new Date("2025-10-18T20:00:31.273Z"),
					updatedAt: new Date("2025-10-18T20:00:31.273Z"),
				},
				{
					id_grupo: 3,
					id_usuario: "marco.spohn",
					createdAt: new Date("2025-10-18T20:00:31.273Z"),
					updatedAt: new Date("2025-10-18T20:00:31.273Z"),
				},
				{
					id_grupo: 3,
					id_usuario: "raquel.pegoraro",
					createdAt: new Date("2025-10-18T20:00:31.273Z"),
					updatedAt: new Date("2025-10-18T20:00:31.273Z"),
				},
				{
					id_grupo: 3,
					id_usuario: "schreiner.geomar",
					createdAt: new Date("2025-10-18T20:00:31.273Z"),
					updatedAt: new Date("2025-10-18T20:00:31.273Z"),
				},
				{
					id_grupo: 3,
					id_usuario: "ricardo.parizotto",
					createdAt: new Date("2025-10-18T20:00:31.273Z"),
					updatedAt: new Date("2025-10-18T20:00:31.273Z"),
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("usuario_grupo", null, {});
	},
};

"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"usuario",
			[
				{
					id: "gian",
					nome: "Giancarlo Salton",
					email: "gian@uffs.edu.br",
					createdAt: new Date("2025-10-18T19:12:59.196Z"),
					updatedAt: new Date("2025-10-18T19:12:59.196Z"),
				},
				{
					id: "claunir.pavan",
					nome: "Claunir Pavan",
					email: "claunir.pavan@uffs.edu.br",
					createdAt: new Date("2025-10-18T19:12:59.196Z"),
					updatedAt: new Date("2025-10-18T19:12:59.196Z"),
				},
				{
					id: "lcaimi",
					nome: "Luciano Lores Caimi",
					email: "lcaimi@uffs.edu.br",
					createdAt: new Date("2025-10-18T19:12:59.196Z"),
					updatedAt: new Date("2025-10-18T19:12:59.196Z"),
				},
				{
					id: "andrei.braga",
					nome: "Andrei De Almeida Sampaio Braga",
					email: "andrei.braga@uffs.edu.br",
					createdAt: new Date("2025-10-18T19:12:59.196Z"),
					updatedAt: new Date("2025-10-18T19:12:59.196Z"),
				},
				{
					id: "felipe.grando",
					nome: "Felipe Grando",
					email: "grando@uffs.edu.br",
					createdAt: new Date("2025-10-18T19:12:59.196Z"),
					updatedAt: new Date("2025-10-18T19:12:59.196Z"),
				},
				{
					id: "samuel.feitosa",
					nome: "Samuel Feitosa",
					email: "samuelfeitosa@uffs.edu.br",
					createdAt: new Date("2025-10-18T19:12:59.196Z"),
					updatedAt: new Date("2025-10-18T19:12:59.196Z"),
				},
				{
					id: "braulio",
					nome: "Braulio Adriano de Mello",
					email: "braulio@uffs.edu.br",
					createdAt: new Date("2025-10-18T19:12:59.196Z"),
					updatedAt: new Date("2025-10-18T19:12:59.196Z"),
				},
				{
					id: "duarte",
					nome: "Denio Duarte",
					email: "duarte@uffs.edu.br",
					createdAt: new Date("2025-10-18T19:12:59.196Z"),
					updatedAt: new Date("2025-10-18T19:12:59.196Z"),
				},
				{
					id: "guilherme.dalbianco",
					nome: "Guilherme Dal Bianco",
					email: "guilherme.dalbianco@uffs.edu.br",
					createdAt: new Date("2025-10-18T19:12:59.196Z"),
					updatedAt: new Date("2025-10-18T19:12:59.196Z"),
				},
				{
					id: "marco.spohn",
					nome: "Marco Aurelio Spohn",
					email: "marco.spohn@uffs.edu.br",
					createdAt: new Date("2025-10-18T19:12:59.196Z"),
					updatedAt: new Date("2025-10-18T19:12:59.196Z"),
				},
				{
					id: "raquel.pegoraro",
					nome: "Raquel Aparecida Pegoraro",
					email: "raquel.pegoraro@uffs.edu.br",
					createdAt: new Date("2025-10-18T19:12:59.196Z"),
					updatedAt: new Date("2025-10-18T19:12:59.196Z"),
				},
				{
					id: "schreiner.geomar",
					nome: "Geomar Schreiner",
					email: "schreiner.geomar@uffs.edu.br",
					createdAt: new Date("2025-10-18T19:12:59.196Z"),
					updatedAt: new Date("2025-10-18T19:12:59.196Z"),
				},
				{
					id: "ricardo.parizotto",
					nome: "Ricardo Parizotto",
					email: "ricardo.parizotto@uffs.edu.br",
					createdAt: new Date("2025-10-18T19:12:59.196Z"),
					updatedAt: new Date("2025-10-18T19:12:59.196Z"),
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("usuario", null, {});
	},
};

"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"curso",
			[
				{
					id: 1,
					codigo: "1100",
					nome: "Ciência da Computação",
					turno: "Vespertino/Noturno",
					coordenador: "claunir.pavan",
					createdAt: new Date("2025-10-18T19:12:59.235Z"),
					updatedAt: new Date("2025-10-18T19:12:59.235Z"),
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("curso", null, {});
	},
};

"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		const usuarios = [
			"gian",
			"claunir.pavan",
			"lcaimi",
			"andrei.braga",
			"felipe.grando",
			"samuel.feitosa",
			"braulio",
			"duarte",
			"guilherme.dalbianco",
			"marco.spohn",
			"raquel.pegoraro",
			"schreiner.geomar",
			"ricardo.parizotto",
		];

		const usuarioCursos = usuarios.map((id_usuario) => ({
			id_curso: 1,
			id_usuario,
			createdAt: new Date("2025-10-18T19:12:59.281Z"),
			updatedAt: new Date("2025-10-18T19:12:59.281Z"),
		}));

		await queryInterface.bulkInsert("usuario_curso", usuarioCursos, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("usuario_curso", null, {});
	},
};

"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		const permissoes = [];

		// Admin - todas as permissões (1-20)
		for (let i = 1; i <= 20; i++) {
			permissoes.push({
				id_grupo: 1,
				id_permissao: i,
				createdAt: new Date("2025-10-18T20:00:31.256Z"),
				updatedAt: new Date("2025-10-18T20:00:31.256Z"),
				deletedAt: null,
			});
		}

		// Coordenador - permissões 6-20
		for (let i = 6; i <= 20; i++) {
			permissoes.push({
				id_grupo: 2,
				id_permissao: i,
				createdAt: new Date("2025-10-18T20:00:31.256Z"),
				updatedAt: new Date("2025-10-18T20:00:31.256Z"),
				deletedAt: null,
			});
		}

		// Professor - permissões específicas: 6, 7, 11, 12, 16, 17, 21, 22
		[6, 7, 11, 12, 16, 17, 21, 22].forEach((id_permissao) => {
			permissoes.push({
				id_grupo: 3,
				id_permissao,
				createdAt: new Date("2025-10-18T20:00:31.256Z"),
				updatedAt: new Date("2025-10-18T20:00:31.256Z"),
				deletedAt: null,
			});
		});

		await queryInterface.bulkInsert("grupo_permissao", permissoes, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("grupo_permissao", null, {});
	},
};


"use strict";
module.exports = {
	table: {
		schema: "public",
		tableName: "horario",
	},

	getTableData(Sequelize) {
		return {
			id_curso: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
					model: {
						schema: "public",
						tableName: "curso",
					},
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			id_ccr: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
					model: {
						schema: "public",
						tableName: "ccr",
					},
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			codigo_docente: {
				type: Sequelize.STRING,
				primaryKey: true,
				allowNull: false,
				references: {
					model: {
						schema: "public",
						tableName: "docente",
					},
					key: "codigo",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			ano: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
			},
			semestre: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
			},
			fase: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
			},
			dia_semana: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
			},
			hora_inicio: {
				type: Sequelize.TIME,
				allowNull: true,
			},
			duracao: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			comentario: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			id: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		permitirconflito: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
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

		// Adicionar constraint de foreign key composta para ano_semestre
		await queryInterface.sequelize.query(`
			ALTER TABLE public.horario
			ADD CONSTRAINT fk_ano_semestre_to_horarios
			FOREIGN KEY (ano, semestre)
			REFERENCES public.ano_semestre(ano, semestre)
			ON UPDATE CASCADE
			ON DELETE CASCADE;
		`);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable(this.table);
	},
};


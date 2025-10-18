"use strict";
module.exports = {
	table: {
		schema: "public",
		tableName: "oferta",
	},

	getTableData(Sequelize) {
		return {
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
			fase: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
			},
		turno: {
			type: Sequelize.STRING,
			primaryKey: true,
			allowNull: false,
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
			ALTER TABLE public.oferta
			ADD CONSTRAINT fk_ano_semestre_to_oferta
			FOREIGN KEY (ano, semestre)
			REFERENCES public.ano_semestre(ano, semestre)
			ON UPDATE CASCADE
			ON DELETE CASCADE;
		`);

		// Criar trigger para esta tabela
		await queryInterface.sequelize.query(`
			CREATE TRIGGER update_oferta_updated_at
			BEFORE UPDATE ON public.oferta
			FOR EACH ROW
			EXECUTE FUNCTION update_updated_at_column();
		`);
	},

	async down(queryInterface, Sequelize) {
		// Remover trigger
		await queryInterface.sequelize.query(`
			DROP TRIGGER IF EXISTS update_oferta_updated_at ON public.oferta;
		`);

		await queryInterface.dropTable(this.table);
	},
};


"use strict";
module.exports = {
	table: {
		schema: "public",
		tableName: "permissao",
	},

	getTableData(Sequelize) {
		return {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			codigo: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			descricao: {
				type: Sequelize.STRING,
				allowNull: true,
			},
		codigo_categoria_permissao: {
			type: Sequelize.STRING,
			allowNull: false,
			references: {
				model: {
					schema: "public",
					tableName: "categoria_permissao",
				},
				key: "codigo",
			},
			onUpdate: "CASCADE",
			onDelete: "RESTRICT",
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

		// Criar trigger para esta tabela
		await queryInterface.sequelize.query(`
			CREATE TRIGGER update_permissao_updated_at
			BEFORE UPDATE ON public.permissao
			FOR EACH ROW
			EXECUTE FUNCTION update_updated_at_column();
		`);
	},

	async down(queryInterface, Sequelize) {
		// Remover trigger
		await queryInterface.sequelize.query(`
			DROP TRIGGER IF EXISTS update_permissao_updated_at ON public.permissao;
		`);

		await queryInterface.dropTable(this.table);
	},
};


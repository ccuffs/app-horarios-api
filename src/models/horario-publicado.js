"use strict";

module.exports = (sequelize, DataTypes) => {
	const HorarioPublicado = sequelize.define(
		"HorarioPublicado",
		{
			ano: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
					model: 'ano_semestre',
					key: 'ano'
				}
			},
			semestre: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
					model: 'ano_semestre',
					key: 'semestre'
				}
			},
			publicado: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false
			}
		},
		{
			sequelize,
			tableName: "horário_publicado",
			schema: "public",
			freezeTableName: true,
			timestamps: false,
		},
	);

	// Definir associações
	HorarioPublicado.associate = function(models) {
		// Associação com AnoSemestre usando chave composta
		HorarioPublicado.belongsTo(models.AnoSemestre, {
			foreignKey: ['ano', 'semestre'],
			targetKey: ['ano', 'semestre'],
			as: 'anoSemestre'
		});
	};

	// Método para verificar se um ano/semestre está publicado
	HorarioPublicado.isPublicado = async function(ano, semestre) {
		const registro = await this.findOne({
			where: { ano, semestre }
		});

		return registro ? registro.publicado : false;
	};

	// Método para definir status de publicação
	HorarioPublicado.setPublicado = async function(ano, semestre, publicado) {
		const [registro, created] = await this.findOrCreate({
			where: { ano, semestre },
			defaults: { ano, semestre, publicado }
		});

		if (!created && registro.publicado !== publicado) {
			registro.publicado = publicado;
			await registro.save();
		}

		return registro;
	};

	return HorarioPublicado;
};
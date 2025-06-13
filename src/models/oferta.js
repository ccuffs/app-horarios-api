"use strict";

module.exports = (sequelize, DataTypes) => {
    const Oferta = sequelize.define(
        "Oferta",
        {
            ano: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            semestre: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            id_curso: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            fase: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            turno: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "oferta",
            schema: "public",
            freezeTableName: true,
            timestamps: false,
        }
    );

    Oferta.associate = function(models) {
        // Associação com Curso
        Oferta.belongsTo(models.Curso, {
            foreignKey: 'id_curso',
            as: 'curso'
        });


    };

    return Oferta;
};
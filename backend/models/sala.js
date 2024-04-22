const salaModel = (sequelize, dataTypes) => {
    const sala = sequelize.define(
        "sala",
        {
            id: {
              primaryKey: true,
              type: dataTypes.BIGINT,
              autoIncrement: true,
            },
            name: {
                type: dataTypes.STRING,
                allowNull: false
            },
            capacitate: {
                type: dataTypes.BIGINT,
                allowNull: false
            },
            titlu_film: {
                type: dataTypes.STRING,
                allowNull: false
            },
            gen_film: {
                type: dataTypes.STRING,
                allowNull: false
            },
            ora_incepere_film: {
                type: dataTypes.DATE,
                allowNull: false
            },
            durata_film: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            descriere_film: {
                type: dataTypes.STRING
            }

        },
        {
            freezeTableName: true
        }
    );

    return sala;
}

module.exports = salaModel;


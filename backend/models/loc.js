const locModel = (sequelize, dataTypes) => {
    const loc = sequelize.define(
        "loc",
        {
            id: {
              primaryKey: true,
              type: dataTypes.BIGINT,
              autoIncrement: true,
            },
            id_sala: {
                type: dataTypes.BIGINT,
                allowNull: false
            },
            numar_rand: {
                type: dataTypes.BIGINT,
                allowNull: false
            },
            numar_loc: {
                type: dataTypes.BIGINT,
                allowNull: false
            },
            status_loc: {
                type: dataTypes.BOOLEAN
            }

        },
        {
            freezeTableName: true
        }
    );

    return loc;
}

module.exports = locModel;


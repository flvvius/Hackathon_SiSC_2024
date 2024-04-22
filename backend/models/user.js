const userModel = (sequelize, dataTypes) => {
    const user = sequelize.define(
        "user",
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
            password: {
                type: dataTypes.STRING,
                allowNull: false
            }

        },
        {
            freezeTableName: true,
        }
    );

    return user;
}

module.exports = userModel;


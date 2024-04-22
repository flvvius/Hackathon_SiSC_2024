const sequelize = require('sequelize');
const db = require('../config/db');

const UserModel = require('./user');
const SalaModel = require('./sala');
const LocModel = require('./loc');

const User = UserModel(db, sequelize);
const Sala = SalaModel(db, sequelize);
const Loc = LocModel(db, sequelize);

Sala.hasMany(Loc);
Loc.belongsTo(Sala);


module.exports = {
    User,
    Sala,
    Loc,
    db,
}

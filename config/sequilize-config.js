const Sequelize = require("sequelize");
const dbPropertise = require('./dbPropertise');

const sequelize = new Sequelize(dbPropertise.DB, dbPropertise.USER, dbPropertise.PASSWORD, {
    host: dbPropertise.HOST,
    dialect: dbPropertise.dialect,
    operatorsAliases: 0,

    pool: {
        max: dbPropertise.pool.max,
        min: dbPropertise.pool.min,
        acquire: dbPropertise.pool.acquire,
        idle: dbPropertise.pool.idle
    }
});

const db = {
    Sequelize: Sequelize,
    sequelize: sequelize
};


module.exports = db;
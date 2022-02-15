module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        userId: {
            field: 'user_id',
            type: Sequelize.STRING,
            allowNull: false
        },
        userName: {
            field: 'user_name',
            type: Sequelize.STRING,
            allowNull: false,
            set(val) {
                this.setDataValue('userName', val.toUpperCase());
            }
        },
        password: {
            field: 'password',
            type: Sequelize.STRING,
            allowNull: false
        },
        fullName: {
            field: 'full_name',
            type: Sequelize.STRING
        },
        activeStatus: {
            field: 'active_status',
            type: Sequelize.INTEGER,
            defaultValue: 1
        },
        creator: {
            field: 'creator',
            type: Sequelize.INTEGER
        },
        modifier: {
            field: 'modifier',
            type: Sequelize.INTEGER
        }
    },
        { tableName: 'users' }
    );

    return Users;
};
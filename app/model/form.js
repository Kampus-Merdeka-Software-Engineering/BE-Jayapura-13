const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Form = sequelize.define('Form', {
    email: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    message: {
        type: DataTypes.STRING,
    },
});

module.exports = Form
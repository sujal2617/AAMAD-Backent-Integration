const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

//StudentResult table
const StudentResult = sequelize.define("StudentResult", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    registrationNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    marks: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = StudentResult;
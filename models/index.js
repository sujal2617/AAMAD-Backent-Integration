const sequelize = require("../config/database");
const User = require("./userModel");
const StudentResult = require("./StudentResultModel");

//define Association
User.hasMany(StudentResult, {
    foreignKey: "registrationNumber",
    sourceKey: "registrationNumber"
});

StudentResult.belongsTo(User, {
    foreignKey: "registrationNumber",
    targetKey: "registrationNumber",
});

const syncDB = async () => {
    await sequelize.sync({force: false}); //dont reset the db
    console.log("Database synced successfully!");
};

module.exports = {sequelize, syncDB, User, StudentResult};
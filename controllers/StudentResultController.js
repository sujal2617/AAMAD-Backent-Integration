const { StudentResult, User } = require("../models");

exports.addStudentResult = async(req, res) => {
    try {
        const { registrationNumber, subject, marks } = req.body;

        // check if user exists before adding result
        const user = await User.findOne({ where: { registrationNumber } });

        if(!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const result = await StudentResult.create({
            registrationNumber,
            subject,
            marks,
        });
        res.status(201).json(result);
    }
    catch(error) {
        console.error("Error adding result:", error);
        res.status(400).json({ error: "Bad Request" });
    }
};
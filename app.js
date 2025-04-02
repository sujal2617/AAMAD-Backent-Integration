require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/database");
const swaggerSpec = require("./swagger");
const swaggerUI = require("swagger-ui-express");

const StudentResultRoutes = require("./routes/StudentResultRouters");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", userRoutes);
app.use("/api", StudentResultRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    try {
        await sequelize.sync();
        console.log(`🚀 Server running on http://localhost:${PORT}`);
        console.log(`📚 API Documentation available at http://localhost:${PORT}/api-docs`);
    } catch (error) {
        console.error("❌ Error starting server:", error);
    }
});

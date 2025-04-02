const swaggerJSDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "User and Student Result CRUD API",
            version: "1.0.0",
            description: "CRUD API using MySQL, Sequelize, Node.js"
        },
        servers: [{ url: process.env.BASE_URL||"http://localhost:5000" }],
        components: {
            schemas: {
                User: {
                    type: "object",
                    required: ["name", "registrationNumber", "email"],
                    properties: {
                        id: { type: "integer", readOnly: true },
                        name: { type: "string" },
                        registrationNumber: { type: "string" },
                        email: { type: "string" },
                        age: { type: "integer" }
                    }
                },
                StudentResult: {
                    type: "object",
                    required: ["subject", "registrationNumber", "marks"],
                    properties: {
                        id: { type: "integer", readOnly: true },
                        registrationNumber: { type: "string" },
                        subject: { type: "string" },
                        marks: { type: "integer" }
                    }
                }
            }
        }
    },
    apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
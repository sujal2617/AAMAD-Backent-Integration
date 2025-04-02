const express = require("express");
const { addStudentResult } = require("../controllers/StudentResultController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: StudentResults
 *   description: CRUD operations for Student Results
 */

/**
 * @swagger
 * /api/student-results:
 *   post:
 *     summary: Create new student result
 *     tags: [StudentResults]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentResult'
 *     responses:
 *       201:
 *         description: Student result created
 *       400:
 *         description: Bad request
 */
router.post("/student-results", addStudentResult);

module.exports = router;
const express = require("express");
const {
  getStudent,
  studentSingUp,
  studentLogin,
} = require("../controllers/studentController");

const studentRouter = express.Router();

studentRouter.get("/:token", getStudent);

studentRouter.post("/singup", studentSingUp);

studentRouter.post("/login", studentLogin);

module.exports = studentRouter;

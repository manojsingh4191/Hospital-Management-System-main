const express = require("express");
const router = express.Router();

const {
  getPatients,
  addPatient,
  deletePatient,
} = require("../controllers/PatientController");

router.get("/", getPatients);
router.post("/", addPatient);

console.log("DELETE route loaded");

router.delete("/:id", deletePatient);

module.exports = router;


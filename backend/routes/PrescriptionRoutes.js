const express = require("express");
const router = express.Router();

const {
  getPrescriptions,
  addPrescription,
  deletePrescription,
} = require("../controllers/PrescriptionController");

router.get("/", getPrescriptions);
router.post("/", addPrescription);
router.delete("/:id", deletePrescription);

module.exports = router;

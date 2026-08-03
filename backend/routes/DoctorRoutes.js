const express = require("express");
const router = express.Router();

const {
  getDoctors,
  addDoctor,
  deleteDoctor,
} = require("../controllers/DoctorController");

router.get("/", getDoctors);
router.post("/", addDoctor);
router.delete("/:id", deleteDoctor);

module.exports = router;

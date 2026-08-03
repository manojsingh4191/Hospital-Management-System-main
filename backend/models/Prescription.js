const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  medicine: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Prescription", prescriptionSchema);

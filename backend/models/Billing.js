const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  treatment: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  billDate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Billing", billingSchema);

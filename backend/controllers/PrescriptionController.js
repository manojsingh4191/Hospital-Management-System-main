const Prescription = require("../models/Prescription");

// Get all prescriptions
exports.getPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find();
    res.json(prescriptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add prescription
exports.addPrescription = async (req, res) => {
  try {
    const prescription = new Prescription(req.body);
    await prescription.save();

    res.status(201).json({
      message: "Prescription Added Successfully",
      prescription,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
};

// Delete prescription
exports.deletePrescription = async (req, res) => {
  try {
    const prescription = await Prescription.findByIdAndDelete(req.params.id);

    if (!prescription) {
      return res.status(404).json({
        message: "Prescription not found",
      });
    }

    res.json({
      message: "Prescription Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

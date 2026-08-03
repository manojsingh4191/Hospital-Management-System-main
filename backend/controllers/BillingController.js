const Billing = require("../models/Billing");

// Get all bills
exports.getBills = async (req, res) => {
  try {
    const bills = await Billing.find();
    res.json(bills);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

// Add new bill
exports.addBill = async (req, res) => {
  try {
    console.log(req.body);

    const bill = new Billing({
      patientName: req.body.patientName,
      doctorName: req.body.doctorName,
      treatment: req.body.treatment,
      amount: req.body.amount,
      billDate: req.body.billDate,
    });

    await bill.save();

    res.status(201).json({
      message: "Bill Added Successfully",
      bill,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
};

// Delete bill
exports.deleteBill = async (req, res) => {
  try {
    const bill = await Billing.findByIdAndDelete(req.params.id);

    if (!bill) {
      return res.status(404).json({
        message: "Bill not found",
      });
    }

    res.json({
      message: "Bill Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

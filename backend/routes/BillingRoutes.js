const express = require("express");
const router = express.Router();

const {
  getBills,
  addBill,
  deleteBill,
} = require("../controllers/BillingController");

router.get("/", getBills);

router.post("/", addBill);

router.delete("/:id", deleteBill);

module.exports = router;

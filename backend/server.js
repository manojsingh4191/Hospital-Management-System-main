const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const patientRoutes = require("./routes/PatientRoutes");
const doctorRoutes = require("./routes/DoctorRoutes");
const appointmentRoutes = require("./routes/AppointmentRoutes");
const prescriptionRoutes = require("./routes/PrescriptionRoutes");
const billingRoutes = require("./routes/BillingRoutes");

console.log("Billing Routes Loaded");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/patients", patientRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/prescriptions", prescriptionRoutes);
app.use("/api/bills", billingRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

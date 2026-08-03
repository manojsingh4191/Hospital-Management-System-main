import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import AddPatient from "./pages/AddPatient";
import AddDoctor from "./pages/AddDoctor";
import Prescription from "./pages/Prescription";
import Billing from "./pages/Billing";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/prescriptions" element={<Prescription />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

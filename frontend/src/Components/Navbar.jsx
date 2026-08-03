import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#00b4d8",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/patients" style={linkStyle}>Patients</Link>
      <Link to="/add-patient" style={linkStyle}>Add Patient</Link>
      <Link to="/doctors" style={linkStyle}>Doctors</Link>
      <Link to="/add-doctor" style={linkStyle}>Add Doctor</Link>
      <Link to="/appointments" style={linkStyle}>Appointments</Link>
      <Link to="/prescriptions" style={linkStyle}>Prescriptions</Link>
      <Link to="/billing" style={linkStyle}>Billing</Link>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "bold",
};

export default Navbar;

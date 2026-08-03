import { useState, useEffect } from "react";

function Prescription() {
  const [prescription, setPrescription] = useState({
    patientName: "",
    doctorName: "",
    medicine: "",
    dosage: "",
    notes: "",
  });

  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = async () => {
    const response = await fetch("https://hospital-management-system-lk5x.onrender.com/api/prescriptions");
    const data = await response.json();
    setPrescriptions(data);
  };

  const handleChange = (e) => {
    setPrescription({
      ...prescription,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://hospital-management-system-lk5x.onrender.com/api/prescriptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prescription),
    });

    if (response.ok) {
      alert("Prescription Added Successfully!");

      setPrescription({
        patientName: "",
        doctorName: "",
        medicine: "",
        dosage: "",
        notes: "",
      });

      fetchPrescriptions();
    }
  };

  const deletePrescription = async (id) => {
    await fetch(`https://hospital-management-system-lk5x.onrender.com/api/prescriptions/${id}`, {
      method: "DELETE",
    });

    fetchPrescriptions();
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Prescription Management</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={prescription.patientName}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="doctorName"
          placeholder="Doctor Name"
          value={prescription.doctorName}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="medicine"
          placeholder="Medicine"
          value={prescription.medicine}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="dosage"
          placeholder="Dosage"
          value={prescription.dosage}
          onChange={handleChange}
        />
        <br /><br />

        <textarea
          name="notes"
          placeholder="Notes"
          value={prescription.notes}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Add Prescription</button>
      </form>

      <h2>Prescription List</h2>

      {prescriptions.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid gray",
            margin: "10px auto",
            padding: "10px",
            width: "350px",
          }}
        >
          <p><b>Patient:</b> {item.patientName}</p>
          <p><b>Doctor:</b> {item.doctorName}</p>
          <p><b>Medicine:</b> {item.medicine}</p>
          <p><b>Dosage:</b> {item.dosage}</p>
          <p><b>Notes:</b> {item.notes}</p>

          <button onClick={() => deletePrescription(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Prescription;

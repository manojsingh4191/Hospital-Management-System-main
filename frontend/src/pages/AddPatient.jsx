import { useState } from "react";

function AddPatient() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    disease: "",
  });

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://hospital-management-system-lk5x.onrender.com/api/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patient),
      });

      if (response.ok) {
        alert("Patient Added Successfully!");

        setPatient({
          name: "",
          age: "",
          disease: "",
        });
      } else {
        alert("Failed to Add Patient");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>Add Patient</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Patient Name"
          value={patient.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={patient.age}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="disease"
          placeholder="Disease"
          value={patient.disease}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
}

export default AddPatient;

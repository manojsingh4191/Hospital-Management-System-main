import { useEffect, useState } from "react";

function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("https://hospital-management-system-lk5x.onrender.com/api/patients")
      .then((res) => res.json())
      .then((data) => setPatients(data))
      .catch((err) => console.log(err));
  }, []);

  const deletePatient = async (id) => {
    try {
      const response = await fetch(`https://hospital-management-system-lk5x.onrender.com/api/patients/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (response.ok) {
        setPatients((prevPatients) =>
          prevPatients.filter((patient) => patient._id !== id)
        );
        alert("Patient Deleted Successfully!");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Patients List</h1>

      {patients.length === 0 ? (
        <p>No Patients Found</p>
      ) : (
        patients.map((patient) => (
          <div
            key={patient._id}
            style={{
              border: "1px solid white",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{patient.name}</h3>
            <p>Age: {patient.age}</p>
            <p>Disease: {patient.disease}</p>

            <button onClick={() => deletePatient(patient._id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Patients;

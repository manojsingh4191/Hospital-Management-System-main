import { useEffect, useState } from "react";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://hospital-management-system-lk5x.onrender.com/api/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.log(err));
  }, []);

  const deleteDoctor = async (id) => {
    try {
      const response = await fetch(`https://hospital-management-system-lk5x.onrender.com/api/doctors/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (response.ok) {
        setDoctors((prevDoctors) =>
          prevDoctors.filter((doctor) => doctor._id !== id)
        );
        alert("Doctor Deleted Successfully!");
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
      <h1>Doctors List</h1>

      {doctors.length === 0 ? (
        <p>No Doctors Found</p>
      ) : (
        doctors.map((doctor) => (
          <div
            key={doctor._id}
            style={{
              border: "1px solid white",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{doctor.name}</h3>
            <p>Specialization: {doctor.specialization}</p>
            <p>Experience: {doctor.experience} Years</p>

            <button onClick={() => deleteDoctor(doctor._id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Doctors;

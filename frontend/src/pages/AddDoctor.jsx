import { useState } from "react";

function AddDoctor() {
  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    experience: "",
  });

  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://hospital-management-system-lk5x.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(doctor),
      });

      if (response.ok) {
        alert("Doctor Added Successfully!");

        setDoctor({
          name: "",
          specialization: "",
          experience: "",
        });
      } else {
        alert("Failed to add doctor");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>Add Doctor</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Doctor Name"
          value={doctor.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={doctor.specialization}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="experience"
          placeholder="Experience (Years)"
          value={doctor.experience}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Add Doctor</button>
      </form>
    </div>
  );
}

export default AddDoctor;

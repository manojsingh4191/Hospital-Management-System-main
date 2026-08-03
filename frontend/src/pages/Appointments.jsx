import { useState, useEffect } from "react";

function Appointments() {
  const [appointment, setAppointment] = useState({
    patientName: "",
    doctorName: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("https://hospital-management-system-lk5x.onrender.com/api/appointments");
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://hospital-management-system-lk5x.onrender.com/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointment),
      });

      if (response.ok) {
        alert("Appointment Booked Successfully!");

        setAppointment({
          patientName: "",
          doctorName: "",
          appointmentDate: "",
          appointmentTime: "",
        });

        fetchAppointments();
      } else {
        alert("Failed to Book Appointment");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  const deleteAppointment = async (id) => {
    try {
      await fetch(`https://hospital-management-system-lk5x.onrender.com/api/appointments/${id}`, {
        method: "DELETE",
      });

      fetchAppointments();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>Book Appointment</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={appointment.patientName}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="doctorName"
          placeholder="Doctor Name"
          value={appointment.doctorName}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="date"
          name="appointmentDate"
          value={appointment.appointmentDate}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="time"
          name="appointmentTime"
          value={appointment.appointmentTime}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Book Appointment</button>
      </form>

      <h2 style={{ marginTop: "30px" }}>Appointment List</h2>

      {appointments.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px auto",
            width: "350px",
          }}
        >
          <p><b>Patient:</b> {item.patientName}</p>
          <p><b>Doctor:</b> {item.doctorName}</p>
          <p><b>Date:</b> {item.appointmentDate}</p>
          <p><b>Time:</b> {item.appointmentTime}</p>

          <button
            onClick={() => deleteAppointment(item._id)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "8px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Appointments;

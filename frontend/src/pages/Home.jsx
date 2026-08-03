function Home() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Hospital Management System</h1>
      <h2>Welcome to Hospital Management System</h2>

      <p>Manage Patients, Doctors and Appointments Easily.</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            background: "#0d6efd",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "180px",
          }}
        >
          <h3>Doctors</h3>
          <h2>10</h2>
        </div>

        <div
          style={{
            background: "green",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "180px",
          }}
        >
          <h3>Patients</h3>
          <h2>25</h2>
        </div>

        <div
          style={{
            background: "orange",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "180px",
          }}
        >
          <h3>Appointments</h3>
          <h2>15</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;

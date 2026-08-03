import { useState, useEffect } from "react";

function Billing() {
  const [bill, setBill] = useState({
    patientName: "",
    doctorName: "",
    treatment: "",
    amount: "",
    billDate: "",
  });

  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetchBills();
  }, []);

  const fetchBills = async () => {
    const response = await fetch("https://hospital-management-system-lk5x.onrender.com/api/bills");
    const data = await response.json();
    setBills(data);
  };

  const handleChange = (e) => {
    setBill({
      ...bill,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://hospital-management-system-lk5x.onrender.com/api/bills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bill),
    });

    if (response.ok) {
      alert("Bill Added Successfully!");

      setBill({
        patientName: "",
        doctorName: "",
        treatment: "",
        amount: "",
        billDate: "",
      });

      fetchBills();
    }
  };

  const deleteBill = async (id) => {
    await fetch(`https://hospital-management-system-lk5x.onrender.com/api/bills/${id}`, {
      method: "DELETE",
    });

    fetchBills();
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Billing System</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={bill.patientName}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="doctorName"
          placeholder="Doctor Name"
          value={bill.doctorName}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="treatment"
          placeholder="Treatment"
          value={bill.treatment}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={bill.amount}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="date"
          name="billDate"
          value={bill.billDate}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Generate Bill</button>
      </form>

      <h2>Billing List</h2>

      {bills.map((item) => (
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
          <p><b>Treatment:</b> {item.treatment}</p>
          <p><b>Amount:</b> ₹{item.amount}</p>
          <p><b>Date:</b> {item.billDate}</p>

          <button onClick={() => deleteBill(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Billing;

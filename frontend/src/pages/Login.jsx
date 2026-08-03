function Login() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Login Page</h1>

      <input
        type="text"
        placeholder="Enter Username"
        style={{ padding: "10px", margin: "10px" }}
      />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        style={{ padding: "10px", margin: "10px" }}
      />
      <br />

      <button style={{ padding: "10px 20px", marginTop: "10px" }}>
        Login
      </button>
    </div>
  );
}

export default Login;

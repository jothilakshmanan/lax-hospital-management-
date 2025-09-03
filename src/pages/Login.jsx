import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onLogin(username, password);
    if (success) {
      navigate("/"); // redirect to Home
    } else {
      setError("Invalid credentials! (use admin / 1234)");
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    // Save Google login in localStorage
    const googleUser = { google: true, token: credentialResponse.credential };
    localStorage.setItem("user", JSON.stringify(googleUser));
    navigate("/"); // redirect to Home
  };

  const handleGoogleError = () => {
    setError("Google login failed. Try again.");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    > <div className="hero-section">
        <div className="hero-overlay">
          <h1>Lax Hospital</h1>
          <p>Your health is our priority. We provide world-class medical care.</p>
          
        </div>
      </div>
      <div
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#2563eb", marginBottom: "10px" }}>
          Hospital Management Portal
        </h2>
        <p style={{ fontSize: "14px", color: "#555", marginBottom: "20px" }}>
          Welcome! Please login.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: "15px", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: "15px", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#2563eb",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            Sign In
          </button>
        </form>

        <p style={{ fontSize: "12px", color: "#888", margin: "10px 0" }}>or</p>

        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
        />

        {error && (
          <p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>
            {error}
          </p>
        )}

        <p style={{ fontSize: "12px", color: "#888", marginTop: "20px" }}>
          Forgot your password? Contact admin@hospital.com
        </p>
      </div>
    </div>
  );
}

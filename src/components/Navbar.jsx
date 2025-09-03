import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // optional for styling


export default function Navbar({ user, onLogout }) {
  const location = useLocation();

  // Hide navbar on login page
  if (location.pathname === "/login") {
    return null;
  }

  return (
    <nav style={{ padding: "10px 20px", backgroundColor: "#6c7a89ff", color: "white" }}>
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        

        {user && (
          <>
           <Link to="/" style={{ color: "white",  marginRight: "20px" }}>
          Home
        </Link>
            <Link to="/dashboard" style={{ color: "white", marginRight: "20px" }}>
              Dashboard
            </Link>
           
            <Link to="/patients" style={{ color: "white", marginRight: "20px" }}>
              Patients
            </Link>
            <Link to="/appointments" style={{ color: "white", marginRight: "20px" }}>
              Appointments
            </Link>
          </>
        )}

        {user && (
          <div style={{ marginLeft: "auto" }}>
            <button
              onClick={onLogout}
              style={{
                padding: "5px 10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

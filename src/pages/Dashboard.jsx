import React, { useEffect, useState } from "react";
import './Dashboard.css';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState(25); // Example doctor count
  const [availableBeds, setAvailableBeds] = useState(8); // Example beds

  // Load appointments and patients from localStorage
  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const savedPatients = JSON.parse(localStorage.getItem("patients")) || [];
    setAppointments(savedAppointments);
    setPatients(savedPatients);
  }, []);

  return (
    
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <p>Quick overview of hospital data.</p>
       {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>Lax Hospital</h1>
          <p>Your health is our priority. We provide world-class medical care.</p>
         
        </div>
      </div>

      {/* Summary Cards */}
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Patients</h3>
          <p>{patients.length}</p>
        </div>
        <div className="card">
          <h3>Total Doctors</h3>
          <p>{doctors}</p>
        </div>
        <div className="card">
          <h3>Appointments Today</h3>
          <p>{appointments.length}</p>
        </div>
        <div className="card">
          <h3>Available Beds</h3>
          <p>{availableBeds}</p>
        </div>
      </div>

      {/* Recent Appointments Table */}
      <h3 className="section-title">Recent Appointments</h3>
      {appointments.length === 0 ? (
        <p>No appointments registered yet.</p>
      ) : (
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Symptoms</th>
            </tr>
          </thead>
          <tbody>
            {appointments.slice(-5).reverse().map((a, i) => (
              <tr key={i}>
                <td>{a.name}</td>
                <td>{a.doctor}</td>
                <td>{a.date}</td>
                <td>{a.symptoms || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

     
    </div>
  );
}

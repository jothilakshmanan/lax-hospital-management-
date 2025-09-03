import { useState, useEffect } from "react";
import './Appointments.css';

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    doctor: "",
    date: "",
    symptoms: "",
    previousConsultation: "",
    duration: "",
  });

  // Load appointments from localStorage on first render
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(saved);
  }, []);

  // Save appointments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.doctor || !formData.date) return;

    setAppointments([...appointments, formData]);
    setFormData({
      name: "",
      doctor: "",
      date: "",
      symptoms: "",
      previousConsultation: "",
      duration: "",
    });
  };

  return (
    <div className="appointments-container p-4">
      {/* Hero Section */}
      <div className="hero-section mb-6">
        <div className="hero-overlay p-4 bg-blue-100 rounded">
          <h1 className="text-3xl font-bold">Lax Hospital</h1>
          <p className="mt-2 text-gray-700">
            Your health is our priority. We provide world-class medical care.
          </p>
        </div>
      </div>

      {/* Appointment Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md max-w-md mb-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Register Appointment</h2>

        <input
          type="text"
          name="name"
          placeholder="Patient Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 mb-3 w-full rounded"
          required
        />

        <input
          type="text"
          name="doctor"
          placeholder="Doctor Name"
          value={formData.doctor}
          onChange={handleChange}
          className="border p-2 mb-3 w-full rounded"
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-2 mb-3 w-full rounded"
          required
        />

        <textarea
          name="symptoms"
          placeholder="Symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          className="border p-2 mb-3 w-full rounded"
        />

        <input
          type="text"
          name="previousConsultation"
          placeholder="Previously Consulted (Doctor/Hospital)"
          value={formData.previousConsultation}
          onChange={handleChange}
          className="border p-2 mb-3 w-full rounded"
        />

        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g., 5 days)"
          value={formData.duration}
          onChange={handleChange}
          className="border p-2 mb-3 w-full rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Register Appointment
        </button>
      </form>

      {/* Registered Appointments */}
      <div className="appointments-list max-w-lg">
        <h3 className="text-xl font-semibold mb-3">Registered Appointments</h3>
        {appointments.length === 0 ? (
          <p>No appointments registered yet.</p>
        ) : (
          <ul className="list-disc pl-6 space-y-2">
            {appointments.map((a, i) => (
              <li key={i} className="border p-3 rounded shadow-sm">
                <p>
                  <strong>Patient:</strong> {a.name}
                </p>
                <p>
                  <strong>Doctor:</strong> {a.doctor}
                </p>
                <p>
                  <strong>Date:</strong> {a.date}
                </p>
                {a.symptoms && (
                  <p>
                    <strong>Symptoms:</strong> {a.symptoms}
                  </p>
                )}
                {a.previousConsultation && (
                  <p>
                    <strong>Previous Consultation:</strong> {a.previousConsultation}
                  </p>
                )}
                {a.duration && (
                  <p>
                    <strong>Duration:</strong> {a.duration}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

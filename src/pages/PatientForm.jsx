import React, { useState, useEffect } from "react";
import "./PatientForm.css";

export default function PatientForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    symptoms: "",
    appointmentDate: "",
  });

  // Load saved data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("patientForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save data whenever it changes
  useEffect(() => {
    localStorage.setItem("patientForm", JSON.stringify(formData));
  }, [formData]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Patient Registered!\n\nName: ${formData.name}\nAppointment: ${formData.appointmentDate}`);
    localStorage.removeItem("patientForm"); // clear after submit
    setFormData({
      name: "",
      age: "",
      gender: "",
      phone: "",
      email: "",
      address: "",
      symptoms: "",
      appointmentDate: "",
    });
  };

  return (
    <form className="patient-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />

      <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />

      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />

      <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />

      <textarea name="address" placeholder="Address" rows="2" value={formData.address} onChange={handleChange} required />

      <textarea name="symptoms" placeholder="Describe your symptoms" rows="3" value={formData.symptoms} onChange={handleChange} required />

      <input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
  );
}

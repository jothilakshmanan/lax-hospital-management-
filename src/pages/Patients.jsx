import { useState, useEffect } from "react";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const savedPatients = JSON.parse(localStorage.getItem("patients")) || [];
    setPatients(savedPatients);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const clearForm = () => {
    setName("");
    setAge("");
    setGender("");
    setMobile("");
    setSymptoms("");
    setEditId(null);
  };

  const addOrUpdatePatient = () => {
    if (!name || !age || !gender || !mobile) return;

    if (editId !== null) {
      // Update existing patient
      const updated = patients.map((p) =>
        p.id === editId
          ? { ...p, name, age, gender, mobile, symptoms }
          : p
      );
      setPatients(updated);
    } else {
      // Add new patient
      const newPatient = {
        id: Date.now(), // simple unique ID
        name,
        age,
        gender,
        mobile,
        symptoms,
        registeredOn: new Date().toLocaleDateString(),
      };
      setPatients([...patients, newPatient]);
    }
    clearForm();
  };

  const editPatient = (p) => {
    setName(p.name);
    setAge(p.age);
    setGender(p.gender);
    setMobile(p.mobile);
    setSymptoms(p.symptoms);
    setEditId(p.id);
  };

  const deletePatient = (id) => {
    if (window.confirm("Are you sure you want to delete this patient?")) {
      setPatients(patients.filter((p) => p.id !== id));
    }
  };

  // Filter patients by search
  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="patients-container">
      <h2>Patients ({patients.length})</h2>
 {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>Lax Hospital</h1>
          <p>Your health is our priority. We provide world-class medical care.</p>
          
        </div>
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="form-section">
        <h3>{editId !== null ? "Edit Patient" : "Add New Patient"}</h3>
        <input
          type="text"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        
        <button onClick={addOrUpdatePatient}>
          {editId !== null ? "Update Patient" : "Add Patient"}
        </button>
        {editId !== null && <button onClick={clearForm}>Cancel</button>}
      </div>

      <ul className="patients-list">
        {filteredPatients.map((p) => (
          <li key={p.id} className="patient-card">
            <strong>{p.name}</strong> (Age: {p.age}, {p.gender})<br />
            Mobile: {p.mobile}<br />
            Symptoms: {p.symptoms || "N/A"}<br />
            Registered On: {p.registeredOn}
            <div className="actions">
              <button onClick={() => editPatient(p)}>Edit</button>
              <button onClick={() => deletePatient(p.id)}>Delete</button>
            </div>
          </li>
        ))}
        {filteredPatients.length === 0 && <p>No patients found.</p>}
      </ul>
    </div>
  );
}

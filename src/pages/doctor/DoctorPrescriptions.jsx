import React, { useState } from "react";

const DoctorPrescriptions = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [prescriptions, setPrescriptions] = useState(
        JSON.parse(localStorage.getItem("prescriptions")) || []
    );
    const [showForm, setShowForm] = useState(false);

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const patients = users.filter(u => u.role === "PATIENT");

    const myPrescriptions = prescriptions.filter(p => p.doctorEmail === currentUser?.email);

    const [formData, setFormData] = useState({
        patientEmail: "",
        medication: "",
        dosage: "",
        notes: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const patient = patients.find(p => p.email === formData.patientEmail);
        if (!patient) {
            alert("Patient not found!");
            return;
        }

        const newPrescription = {
            ...formData,
            patientName: patient.name,
            doctorEmail: currentUser.email,
            doctorName: currentUser.name,
            date: new Date().toLocaleDateString(),
            id: Date.now()
        };

        const updated = [...prescriptions, newPrescription];
        setPrescriptions(updated);
        localStorage.setItem("prescriptions", JSON.stringify(updated));
        setFormData({ patientEmail: "", medication: "", dosage: "", notes: "" });
        setShowForm(false);
        alert("Prescription added successfully!");
    };

    return (
        <div className="dashboard-page">
            <div className="dash-header-row">
                <h2>Prescriptions</h2>
                <button className="dash-btn" onClick={() => setShowForm(!showForm)}>
                    {showForm ? "✕ Cancel" : "+ New Prescription"}
                </button>
            </div>

            {showForm && (
                <form className="dash-form" onSubmit={handleSubmit}>
                    <select name="patientEmail" required value={formData.patientEmail} onChange={handleChange}>
                        <option value="">Select Patient</option>
                        {patients.map((p, i) => (
                            <option key={i} value={p.email}>{p.name} ({p.email})</option>
                        ))}
                    </select>
                    <input type="text" name="medication" placeholder="Medication (e.g. Paracetamol 500mg)" required value={formData.medication} onChange={handleChange} />
                    <input type="text" name="dosage" placeholder="Dosage (e.g. 1 tablet, 3 times daily)" required value={formData.dosage} onChange={handleChange} />
                    <textarea name="notes" placeholder="Additional notes (optional)" value={formData.notes} onChange={handleChange} rows="3"></textarea>
                    <button type="submit" className="dash-btn">Add Prescription</button>
                </form>
            )}

            {myPrescriptions.length === 0 ? (
                <p className="empty-state">No prescriptions created yet.</p>
            ) : (
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Patient</th>
                            <th>Medication</th>
                            <th>Dosage</th>
                            <th>Date</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myPrescriptions.reverse().map((rx, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{rx.patientName}</td>
                                <td>{rx.medication}</td>
                                <td>{rx.dosage}</td>
                                <td>{rx.date}</td>
                                <td>{rx.notes || "—"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default DoctorPrescriptions;

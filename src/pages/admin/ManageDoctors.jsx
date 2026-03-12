import React, { useState } from "react";

const ManageDoctors = () => {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", password: "", specialty: "" });

    const doctors = users.filter(u => u.role === "DOCTOR");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAdd = (e) => {
        e.preventDefault();
        const exists = users.find(u => u.email === formData.email);
        if (exists) {
            alert("A user with this email already exists!");
            return;
        }
        const newDoctor = { ...formData, role: "DOCTOR" };
        const updated = [...users, newDoctor];
        localStorage.setItem("users", JSON.stringify(updated));
        setUsers(updated);
        setFormData({ name: "", email: "", password: "", specialty: "" });
        setShowForm(false);
        alert("Doctor added successfully!");
    };

    const handleDelete = (email) => {
        if (!window.confirm("Are you sure you want to remove this doctor?")) return;
        const updated = users.filter(u => !(u.email === email && u.role === "DOCTOR"));
        localStorage.setItem("users", JSON.stringify(updated));
        setUsers(updated);

        // Also remove related appointments
        const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        const filteredApts = appointments.filter(a => a.doctorEmail !== email);
        localStorage.setItem("appointments", JSON.stringify(filteredApts));
    };

    return (
        <div className="dashboard-page">
            <div className="dash-header-row">
                <h2>Manage Doctors</h2>
                <button className="dash-btn" onClick={() => setShowForm(!showForm)}>
                    {showForm ? "✕ Cancel" : "+ Add Doctor"}
                </button>
            </div>

            {showForm && (
                <form className="dash-form" onSubmit={handleAdd}>
                    <input type="text" name="name" placeholder="Doctor Name" required value={formData.name} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" required value={formData.password} onChange={handleChange} />
                    <input type="text" name="specialty" placeholder="Specialty (e.g. Cardiologist)" required value={formData.specialty} onChange={handleChange} />
                    <button type="submit" className="dash-btn">Add Doctor</button>
                </form>
            )}

            {doctors.length === 0 ? (
                <p className="empty-state">No doctors registered yet. Add one above!</p>
            ) : (
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doc, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{doc.name}</td>
                                <td>{doc.email}</td>
                                <td>{doc.specialty || "General"}</td>
                                <td>
                                    <button className="delete-btn" onClick={() => handleDelete(doc.email)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ManageDoctors;

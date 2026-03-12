import React, { useState } from "react";

const ManagePatients = () => {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);

    const patients = users.filter(u => u.role === "PATIENT");

    const handleDelete = (email) => {
        if (!window.confirm("Are you sure you want to remove this patient?")) return;
        const updated = users.filter(u => !(u.email === email && u.role === "PATIENT"));
        localStorage.setItem("users", JSON.stringify(updated));
        setUsers(updated);

        // Also remove related appointments
        const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        const filteredApts = appointments.filter(a => a.patientEmail !== email);
        localStorage.setItem("appointments", JSON.stringify(filteredApts));
    };

    return (
        <div className="dashboard-page">
            <h2>Manage Patients</h2>
            <p className="dash-subtitle">View and manage all registered patients.</p>

            {patients.length === 0 ? (
                <p className="empty-state">No patients registered yet.</p>
            ) : (
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((pat, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{pat.name}</td>
                                <td>{pat.email}</td>
                                <td>
                                    <button className="delete-btn" onClick={() => handleDelete(pat.email)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ManagePatients;

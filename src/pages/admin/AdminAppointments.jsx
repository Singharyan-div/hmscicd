import React, { useState } from "react";

const AdminAppointments = () => {
    const [appointments, setAppointments] = useState(
        JSON.parse(localStorage.getItem("appointments")) || []
    );

    const updateStatus = (index, newStatus) => {
        const updated = [...appointments];
        updated[index].status = newStatus;
        setAppointments(updated);
        localStorage.setItem("appointments", JSON.stringify(updated));
    };

    const handleDelete = (index) => {
        if (!window.confirm("Cancel this appointment?")) return;
        const updated = appointments.filter((_, i) => i !== index);
        setAppointments(updated);
        localStorage.setItem("appointments", JSON.stringify(updated));
    };

    return (
        <div className="dashboard-page">
            <h2>All Appointments</h2>
            <p className="dash-subtitle">View and manage all hospital appointments.</p>

            {appointments.length === 0 ? (
                <p className="empty-state">No appointments found in the system.</p>
            ) : (
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Patient</th>
                            <th>Doctor</th>
                            <th>Date</th>
                            <th>Reason</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((apt, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{apt.patientName}</td>
                                <td>{apt.doctorName}</td>
                                <td>{apt.date}</td>
                                <td>{apt.reason || "—"}</td>
                                <td>
                                    <span className={`status-badge status-${(apt.status || "pending").toLowerCase()}`}>
                                        {apt.status || "Pending"}
                                    </span>
                                </td>
                                <td className="action-btns">
                                    {(!apt.status || apt.status === "Pending") && (
                                        <>
                                            <button className="approve-btn" onClick={() => updateStatus(i, "Approved")}>✓</button>
                                            <button className="reject-btn" onClick={() => updateStatus(i, "Rejected")}>✗</button>
                                        </>
                                    )}
                                    <button className="delete-btn" onClick={() => handleDelete(i)}>🗑</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AdminAppointments;

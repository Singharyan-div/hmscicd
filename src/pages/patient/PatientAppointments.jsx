import React, { useState } from "react";

const PatientAppointments = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [appointments, setAppointments] = useState(
        JSON.parse(localStorage.getItem("appointments")) || []
    );

    const myAppointments = appointments.filter(a => a.patientEmail === currentUser?.email);

    const handleCancel = (globalIndex) => {
        if (!window.confirm("Are you sure you want to cancel this appointment?")) return;
        const updated = appointments.filter((_, i) => i !== globalIndex);
        setAppointments(updated);
        localStorage.setItem("appointments", JSON.stringify(updated));
    };

    return (
        <div className="dashboard-page">
            <h2>My Appointments</h2>
            <p className="dash-subtitle">View all your booked appointments.</p>

            {myAppointments.length === 0 ? (
                <p className="empty-state">You have no appointments yet. Book one from the sidebar!</p>
            ) : (
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Doctor</th>
                            <th>Date</th>
                            <th>Reason</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myAppointments.map((apt, i) => {
                            const globalIndex = appointments.indexOf(apt);
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{apt.doctorName}</td>
                                    <td>{apt.date}</td>
                                    <td>{apt.reason || "—"}</td>
                                    <td>
                                        <span className={`status-badge status-${(apt.status || "pending").toLowerCase()}`}>
                                            {apt.status || "Pending"}
                                        </span>
                                    </td>
                                    <td>
                                        {(!apt.status || apt.status === "Pending") && (
                                            <button className="delete-btn" onClick={() => handleCancel(globalIndex)}>Cancel</button>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default PatientAppointments;

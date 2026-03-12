import React, { useState } from "react";

const DoctorAppointments = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [appointments, setAppointments] = useState(
        JSON.parse(localStorage.getItem("appointments")) || []
    );

    const myAppointments = appointments.filter(a => a.doctorEmail === currentUser?.email);

    const updateStatus = (globalIndex, newStatus) => {
        const updated = [...appointments];
        updated[globalIndex].status = newStatus;
        setAppointments(updated);
        localStorage.setItem("appointments", JSON.stringify(updated));
    };

    return (
        <div className="dashboard-page">
            <h2>My Appointments</h2>
            <p className="dash-subtitle">View and manage your patient appointments.</p>

            {myAppointments.length === 0 ? (
                <p className="empty-state">You have no appointments yet.</p>
            ) : (
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Patient</th>
                            <th>Date</th>
                            <th>Reason</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myAppointments.map((apt, i) => {
                            const globalIndex = appointments.indexOf(apt);
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{apt.patientName}</td>
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
                                                <button className="approve-btn" onClick={() => updateStatus(globalIndex, "Approved")}>Approve</button>
                                                <button className="reject-btn" onClick={() => updateStatus(globalIndex, "Rejected")}>Reject</button>
                                            </>
                                        )}
                                        {apt.status === "Approved" && (
                                            <button className="complete-btn" onClick={() => updateStatus(globalIndex, "Completed")}>Complete</button>
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

export default DoctorAppointments;

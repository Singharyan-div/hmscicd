import React from "react";

const DoctorDashboard = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const myAppointments = appointments.filter(a => a.doctorEmail === currentUser?.email);

    const upcoming = myAppointments.filter(a => a.status === "Approved").length;
    const pending = myAppointments.filter(a => !a.status || a.status === "Pending").length;
    const total = myAppointments.length;

    return (
        <div className="dashboard-page">
            <h2>Doctor Dashboard</h2>
            <p className="dash-subtitle">Welcome, Dr. {currentUser?.name || "Doctor"}! Here's your overview.</p>

            <div className="dashboard-grid">
                <div className="dash-card dash-card-orange">
                    <div className="dash-card-icon">📅</div>
                    <div className="dash-card-info">
                        <span className="dash-card-number">{total}</span>
                        <span className="dash-card-label">Total Appointments</span>
                    </div>
                </div>
                <div className="dash-card dash-card-green">
                    <div className="dash-card-icon">✅</div>
                    <div className="dash-card-info">
                        <span className="dash-card-number">{upcoming}</span>
                        <span className="dash-card-label">Approved</span>
                    </div>
                </div>
                <div className="dash-card dash-card-blue">
                    <div className="dash-card-icon">⏳</div>
                    <div className="dash-card-info">
                        <span className="dash-card-number">{pending}</span>
                        <span className="dash-card-label">Pending</span>
                    </div>
                </div>
            </div>

            <div className="dash-section">
                <h3>Upcoming Appointments</h3>
                {myAppointments.length === 0 ? (
                    <p className="empty-state">No appointments assigned to you yet.</p>
                ) : (
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Patient</th>
                                <th>Date</th>
                                <th>Reason</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myAppointments.slice(-5).reverse().map((apt, i) => (
                                <tr key={i}>
                                    <td>{apt.patientName}</td>
                                    <td>{apt.date}</td>
                                    <td>{apt.reason || "—"}</td>
                                    <td><span className={`status-badge status-${(apt.status || "pending").toLowerCase()}`}>{apt.status || "Pending"}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default DoctorDashboard;

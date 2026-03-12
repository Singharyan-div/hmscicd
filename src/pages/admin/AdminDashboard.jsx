import React from "react";

const AdminDashboard = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const departments = JSON.parse(localStorage.getItem("departments")) || [
        "Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Gynecology", "Radiology"
    ];

    const doctorCount = users.filter(u => u.role === "DOCTOR").length;
    const patientCount = users.filter(u => u.role === "PATIENT").length;

    return (
        <div className="dashboard-page">
            <h2>Admin Dashboard</h2>
            <p className="dash-subtitle">Welcome back, Administrator! Here's an overview of your hospital.</p>

            <div className="dashboard-grid">
                <div className="dash-card dash-card-orange">
                    <div className="dash-card-icon">👨‍⚕️</div>
                    <div className="dash-card-info">
                        <span className="dash-card-number">{doctorCount}</span>
                        <span className="dash-card-label">Doctors</span>
                    </div>
                </div>

                <div className="dash-card dash-card-blue">
                    <div className="dash-card-icon">👥</div>
                    <div className="dash-card-info">
                        <span className="dash-card-number">{patientCount}</span>
                        <span className="dash-card-label">Patients</span>
                    </div>
                </div>

                <div className="dash-card dash-card-green">
                    <div className="dash-card-icon">📅</div>
                    <div className="dash-card-info">
                        <span className="dash-card-number">{appointments.length}</span>
                        <span className="dash-card-label">Appointments</span>
                    </div>
                </div>

                <div className="dash-card dash-card-purple">
                    <div className="dash-card-icon">🏢</div>
                    <div className="dash-card-info">
                        <span className="dash-card-number">{departments.length}</span>
                        <span className="dash-card-label">Departments</span>
                    </div>
                </div>
            </div>

            <div className="dash-section">
                <h3>Recent Appointments</h3>
                {appointments.length === 0 ? (
                    <p className="empty-state">No appointments scheduled yet.</p>
                ) : (
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Patient</th>
                                <th>Doctor</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.slice(-5).reverse().map((apt, i) => (
                                <tr key={i}>
                                    <td>{apt.patientName}</td>
                                    <td>{apt.doctorName}</td>
                                    <td>{apt.date}</td>
                                    <td><span className={`status-badge status-${apt.status?.toLowerCase() || "pending"}`}>{apt.status || "Pending"}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;

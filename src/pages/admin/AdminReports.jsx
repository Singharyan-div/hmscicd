import React from "react";

const AdminReports = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const departments = JSON.parse(localStorage.getItem("departments")) || [];

    const doctors = users.filter(u => u.role === "DOCTOR");
    const patients = users.filter(u => u.role === "PATIENT");

    const approved = appointments.filter(a => a.status === "Approved").length;
    const rejected = appointments.filter(a => a.status === "Rejected").length;
    const pending = appointments.filter(a => !a.status || a.status === "Pending").length;

    return (
        <div className="dashboard-page">
            <h2>Hospital Reports</h2>
            <p className="dash-subtitle">Summary of hospital operations and statistics.</p>

            <div className="dashboard-grid">
                <div className="dash-card dash-card-orange">
                    <div className="dash-card-icon">👨‍⚕️</div>
                    <div className="dash-card-info">
                        <span className="dash-card-number">{doctors.length}</span>
                        <span className="dash-card-label">Total Doctors</span>
                    </div>
                </div>
                <div className="dash-card dash-card-blue">
                    <div className="dash-card-icon">👥</div>
                    <div className="dash-card-info">
                        <span className="dash-card-number">{patients.length}</span>
                        <span className="dash-card-label">Total Patients</span>
                    </div>
                </div>
                <div className="dash-card dash-card-green">
                    <div className="dash-card-icon">🏢</div>
                    <div className="dash-card-info">
                        <span className="dash-card-number">{departments.length}</span>
                        <span className="dash-card-label">Departments</span>
                    </div>
                </div>
                <div className="dash-card dash-card-purple">
                    <div className="dash-card-icon">📋</div>
                    <div className="dash-card-info">
                        <span className="dash-card-number">{users.length}</span>
                        <span className="dash-card-label">Total Users</span>
                    </div>
                </div>
            </div>

            <div className="dash-section">
                <h3>Appointment Statistics</h3>
                <div className="report-stats">
                    <div className="report-stat-item">
                        <span className="report-stat-number">{appointments.length}</span>
                        <span className="report-stat-label">Total Appointments</span>
                    </div>
                    <div className="report-stat-item report-stat-green">
                        <span className="report-stat-number">{approved}</span>
                        <span className="report-stat-label">Approved</span>
                    </div>
                    <div className="report-stat-item report-stat-red">
                        <span className="report-stat-number">{rejected}</span>
                        <span className="report-stat-label">Rejected</span>
                    </div>
                    <div className="report-stat-item report-stat-yellow">
                        <span className="report-stat-number">{pending}</span>
                        <span className="report-stat-label">Pending</span>
                    </div>
                </div>
            </div>

            {doctors.length > 0 && (
                <div className="dash-section">
                    <h3>Doctor Directory</h3>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Specialty</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((doc, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{doc.name}</td>
                                    <td>{doc.email}</td>
                                    <td>{doc.specialty || "General"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminReports;

import React from "react";

const PatientDashboard = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const prescriptions = JSON.parse(localStorage.getItem("prescriptions")) || [];

    const myAppointments = appointments.filter(a => a.patientEmail === currentUser?.email);
    const myPrescriptions = prescriptions.filter(p => p.patientEmail === currentUser?.email);

    const approved = myAppointments.filter(a => a.status === "Approved").length;
    const pending = myAppointments.filter(a => !a.status || a.status === "Pending").length;

    return (
        <div className="dashboard-page">
            <h2>Patient Dashboard</h2>
            <p className="dash-subtitle">Welcome, {currentUser?.name || "Patient"}! Here's your health overview.</p>

            <div className="dashboard-grid">
                <div className="dash-card dash-card-orange">
                    <div className="dash-card-icon">📅</div>
                    <div className="dash-card-info">
                        <span className="dash-card-number">{myAppointments.length}</span>
                        <span className="dash-card-label">Total Appointments</span>
                    </div>
                </div>
                <div className="dash-card dash-card-green">
                    <div className="dash-card-icon">✅</div>
                    <div className="dash-card-info">
                        <span className="dash-card-number">{approved}</span>
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
                <div className="dash-card dash-card-purple">
                    <div className="dash-card-icon">💊</div>
                    <div className="dash-card-info">
                        <span className="dash-card-number">{myPrescriptions.length}</span>
                        <span className="dash-card-label">Prescriptions</span>
                    </div>
                </div>
            </div>

            {myAppointments.length > 0 && (
                <div className="dash-section">
                    <h3>Recent Appointments</h3>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Doctor</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myAppointments.slice(-3).reverse().map((apt, i) => (
                                <tr key={i}>
                                    <td>{apt.doctorName}</td>
                                    <td>{apt.date}</td>
                                    <td><span className={`status-badge status-${(apt.status || "pending").toLowerCase()}`}>{apt.status || "Pending"}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default PatientDashboard;

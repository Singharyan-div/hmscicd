import React from "react";

const MedicalHistory = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const prescriptions = JSON.parse(localStorage.getItem("prescriptions")) || [];

    const completedAppointments = appointments.filter(
        a => a.patientEmail === currentUser?.email && a.status === "Completed"
    );

    const myPrescriptions = prescriptions.filter(p => p.patientEmail === currentUser?.email);

    return (
        <div className="dashboard-page">
            <h2>Medical History</h2>
            <p className="dash-subtitle">View your past visits and medical records.</p>

            <div className="dash-section">
                <h3>Completed Visits</h3>
                {completedAppointments.length === 0 ? (
                    <p className="empty-state">No completed visits recorded yet.</p>
                ) : (
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Doctor</th>
                                <th>Date</th>
                                <th>Reason</th>
                            </tr>
                        </thead>
                        <tbody>
                            {completedAppointments.map((apt, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{apt.doctorName}</td>
                                    <td>{apt.date}</td>
                                    <td>{apt.reason || "—"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            <div className="dash-section">
                <h3>Prescription History</h3>
                {myPrescriptions.length === 0 ? (
                    <p className="empty-state">No prescriptions on file yet.</p>
                ) : (
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Doctor</th>
                                <th>Medication</th>
                                <th>Dosage</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myPrescriptions.map((rx, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{rx.doctorName}</td>
                                    <td>{rx.medication}</td>
                                    <td>{rx.dosage}</td>
                                    <td>{rx.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default MedicalHistory;

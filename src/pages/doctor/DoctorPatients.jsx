import React from "react";

const DoctorPatients = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    // Get unique patients who have appointments with this doctor
    const myPatientEmails = [...new Set(
        appointments
            .filter(a => a.doctorEmail === currentUser?.email)
            .map(a => a.patientEmail)
    )];

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const myPatients = users.filter(u => myPatientEmails.includes(u.email));

    // Get prescriptions for patient detail
    const prescriptions = JSON.parse(localStorage.getItem("prescriptions")) || [];

    return (
        <div className="dashboard-page">
            <h2>Patient Records</h2>
            <p className="dash-subtitle">Patients who have booked appointments with you.</p>

            {myPatients.length === 0 ? (
                <p className="empty-state">No patients have booked with you yet.</p>
            ) : (
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Appointments</th>
                            <th>Prescriptions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myPatients.map((pat, i) => {
                            const patApts = appointments.filter(
                                a => a.patientEmail === pat.email && a.doctorEmail === currentUser?.email
                            ).length;
                            const patPrescriptions = prescriptions.filter(
                                p => p.patientEmail === pat.email && p.doctorEmail === currentUser?.email
                            ).length;
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{pat.name}</td>
                                    <td>{pat.email}</td>
                                    <td>{patApts}</td>
                                    <td>{patPrescriptions}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default DoctorPatients;

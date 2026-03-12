import React from "react";

const PatientPrescriptions = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const prescriptions = JSON.parse(localStorage.getItem("prescriptions")) || [];
    const myPrescriptions = prescriptions.filter(p => p.patientEmail === currentUser?.email);

    return (
        <div className="dashboard-page">
            <h2>My Prescriptions</h2>
            <p className="dash-subtitle">View all prescriptions from your doctors.</p>

            {myPrescriptions.length === 0 ? (
                <p className="empty-state">No prescriptions yet. Your doctor will add them after your visit.</p>
            ) : (
                <div className="prescription-list">
                    {myPrescriptions.reverse().map((rx, i) => (
                        <div className="prescription-card" key={i}>
                            <div className="rx-header">
                                <span className="rx-icon">💊</span>
                                <div>
                                    <h4>{rx.medication}</h4>
                                    <p className="rx-doctor">Prescribed by {rx.doctorName}</p>
                                </div>
                                <span className="rx-date">{rx.date}</span>
                            </div>
                            <div className="rx-body">
                                <div className="rx-detail">
                                    <span className="rx-label">Dosage:</span>
                                    <span>{rx.dosage}</span>
                                </div>
                                {rx.notes && (
                                    <div className="rx-detail">
                                        <span className="rx-label">Notes:</span>
                                        <span>{rx.notes}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PatientPrescriptions;

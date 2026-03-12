import React, { useState } from "react";

const PatientProfile = () => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("currentUser"))
    );
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: currentUser?.name || "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        const updatedUser = { ...currentUser, ...formData };
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));

        // Also update in users array
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const idx = users.findIndex(u => u.email === currentUser.email);
        if (idx !== -1) {
            users[idx] = { ...users[idx], ...formData };
            localStorage.setItem("users", JSON.stringify(users));
        }

        setCurrentUser(updatedUser);
        setEditing(false);
        alert("Profile updated successfully!");
    };

    // Get stats
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const myAppointments = appointments.filter(a => a.patientEmail === currentUser?.email);

    return (
        <div className="dashboard-page">
            <h2>My Profile</h2>

            <div className="profile-card">
                <div className="profile-avatar">👤</div>
                <div className="profile-details">
                    {!editing ? (
                        <>
                            <div className="profile-row">
                                <span className="profile-label">Name</span>
                                <span className="profile-value">{currentUser?.name}</span>
                            </div>
                            <div className="profile-row">
                                <span className="profile-label">Email</span>
                                <span className="profile-value">{currentUser?.email}</span>
                            </div>
                            <div className="profile-row">
                                <span className="profile-label">Role</span>
                                <span className="profile-value">{currentUser?.role}</span>
                            </div>
                            <div className="profile-row">
                                <span className="profile-label">Total Appointments</span>
                                <span className="profile-value">{myAppointments.length}</span>
                            </div>
                            <button className="dash-btn" onClick={() => setEditing(true)}>Edit Profile</button>
                        </>
                    ) : (
                        <form className="dash-form" onSubmit={handleSave}>
                            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                            <div className="form-actions">
                                <button type="submit" className="dash-btn">Save</button>
                                <button type="button" className="dash-btn dash-btn-secondary" onClick={() => setEditing(false)}>Cancel</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PatientProfile;

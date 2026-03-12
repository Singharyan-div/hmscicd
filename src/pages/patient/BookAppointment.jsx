import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookAppointment = () => {
    const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const doctors = users.filter(u => u.role === "DOCTOR");

    const [formData, setFormData] = useState({
        doctorEmail: "",
        date: "",
        reason: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const doctor = doctors.find(d => d.email === formData.doctorEmail);
        if (!doctor) {
            alert("Please select a valid doctor.");
            return;
        }

        const appointment = {
            patientEmail: currentUser.email,
            patientName: currentUser.name,
            doctorEmail: doctor.email,
            doctorName: doctor.name,
            date: formData.date,
            reason: formData.reason,
            status: "Pending",
            bookedAt: new Date().toISOString()
        };

        const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        appointments.push(appointment);
        localStorage.setItem("appointments", JSON.stringify(appointments));

        alert("Appointment booked successfully!");
        navigate("/patient/appointments");
    };

    // Get today's date for min date
    const today = new Date().toISOString().split("T")[0];

    return (
        <div className="dashboard-page">
            <h2>Book Appointment</h2>
            <p className="dash-subtitle">Schedule a new appointment with one of our doctors.</p>

            {doctors.length === 0 ? (
                <p className="empty-state">No doctors available at the moment. Please check back later.</p>
            ) : (
                <form className="dash-form booking-form" onSubmit={handleSubmit}>
                    <label>Select Doctor</label>
                    <select name="doctorEmail" required value={formData.doctorEmail} onChange={handleChange}>
                        <option value="">Choose a Doctor</option>
                        {doctors.map((doc, i) => (
                            <option key={i} value={doc.email}>
                                {doc.name} — {doc.specialty || "General"}
                            </option>
                        ))}
                    </select>

                    <label>Appointment Date</label>
                    <input
                        type="date"
                        name="date"
                        required
                        min={today}
                        value={formData.date}
                        onChange={handleChange}
                    />

                    <label>Reason for Visit</label>
                    <textarea
                        name="reason"
                        placeholder="Describe your symptoms or reason for the appointment..."
                        rows="4"
                        required
                        value={formData.reason}
                        onChange={handleChange}
                    ></textarea>

                    <button type="submit" className="dash-btn">Book Appointment</button>
                </form>
            )}
        </div>
    );
};

export default BookAppointment;

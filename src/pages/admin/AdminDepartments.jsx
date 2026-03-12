import React, { useState } from "react";

const defaultDepts = ["Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Gynecology", "Radiology"];

const AdminDepartments = () => {
    const stored = JSON.parse(localStorage.getItem("departments"));
    const [departments, setDepartments] = useState(stored || defaultDepts);
    const [newDept, setNewDept] = useState("");

    // Save to localStorage on first load if not set
    if (!stored) {
        localStorage.setItem("departments", JSON.stringify(defaultDepts));
    }

    const handleAdd = (e) => {
        e.preventDefault();
        if (!newDept.trim()) return;
        if (departments.includes(newDept.trim())) {
            alert("Department already exists!");
            return;
        }
        const updated = [...departments, newDept.trim()];
        setDepartments(updated);
        localStorage.setItem("departments", JSON.stringify(updated));
        setNewDept("");
    };

    const handleDelete = (dept) => {
        if (!window.confirm(`Remove "${dept}" department?`)) return;
        const updated = departments.filter(d => d !== dept);
        setDepartments(updated);
        localStorage.setItem("departments", JSON.stringify(updated));
    };

    return (
        <div className="dashboard-page">
            <h2>Manage Departments</h2>
            <p className="dash-subtitle">Add or remove hospital departments.</p>

            <form className="dash-form dash-form-inline" onSubmit={handleAdd}>
                <input
                    type="text"
                    placeholder="New department name"
                    value={newDept}
                    onChange={(e) => setNewDept(e.target.value)}
                    required
                />
                <button type="submit" className="dash-btn">+ Add</button>
            </form>

            <div className="dept-chips">
                {departments.map((dept, i) => (
                    <div className="dept-chip" key={i}>
                        <span>🏢 {dept}</span>
                        <button className="chip-remove" onClick={() => handleDelete(dept)}>✕</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDepartments;

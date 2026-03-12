import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  /*
    role values:
    null        → before login
    "ADMIN"     → admin login
    "DOCTOR"    → doctor login
    "PATIENT"   → patient login
  */

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const role = currentUser?.role || null;

  return (
    <aside className="menu">
      <h3>Menu</h3>
      <ul>
        {/* ===== BEFORE LOGIN (GENERAL MENU) ===== */}
        {!role && (
          <>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About Hospital</NavLink> </li>
            <li><NavLink to="/departments">Departments</NavLink> </li>
            <li><NavLink to="/doctors">Doctors</NavLink> </li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </>
        )}

        {/* ===== ADMIN MENU ===== */}
        {role === "ADMIN" && (
          <>
            <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/admin/doctors">Manage Doctors</NavLink></li>
            <li><NavLink to="/admin/patients">Manage Patients</NavLink></li>
            <li><NavLink to="/admin/departments">Departments</NavLink></li>
            <li><NavLink to="/admin/appointments">Appointments</NavLink></li>
            <li><NavLink to="/admin/reports">Reports</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>
          </>
        )}

        {/* ===== DOCTOR MENU ===== */}
        {role === "DOCTOR" && (
          <>
            <li><NavLink to="/doctor/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/doctor/appointments">My Appointments</NavLink></li>
            <li><NavLink to="/doctor/patients">Patient Records</NavLink></li>
            <li><NavLink to="/doctor/prescriptions">Prescriptions</NavLink></li>
            <li><NavLink to="/doctor/profile">Profile</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>
          </>
        )}

        {/* ===== PATIENT MENU ===== */}
        {role === "PATIENT" && (
          <>
            <li><NavLink to="/patient/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/patient/book">Book Appointment</NavLink></li>
            <li><NavLink to="/patient/appointments">My Appointments</NavLink></li>
            <li><NavLink to="/patient/history">Medical History</NavLink></li>
            <li><NavLink to="/patient/prescriptions">Prescriptions</NavLink></li>
            <li><NavLink to="/patient/profile">Profile</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>
          </>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
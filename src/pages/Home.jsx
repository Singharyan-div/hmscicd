import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      {/* ===== HOSPITAL BANNER ===== */}
      <img
        src="/images/hospital.png"
        alt="Hospital Building"
        className="hospital-banner"
      />

      {/* ===== HERO SECTION ===== */}
      <div className="home-hero">
        <h2>Welcome to MediCare Hospital</h2>
        <p>
          A smart, secure, and efficient platform to manage hospital operations
          and improve patient care. Experience world-class healthcare with compassion and excellence.
        </p>
      </div>

      {/* ===== STATISTICS SECTION ===== */}
      <div className="stats-section">
        <div className="stat-card">
          <div className="stat-icon">🛏️</div>
          <span className="stat-number">500+</span>
          <span className="stat-label">Hospital Beds</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👨‍⚕️</div>
          <span className="stat-number">50+</span>
          <span className="stat-label">Expert Doctors</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <span className="stat-number">10,000+</span>
          <span className="stat-label">Happy Patients</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🏢</div>
          <span className="stat-number">15+</span>
          <span className="stat-label">Departments</span>
        </div>
      </div>

      {/* ===== ROLE CARDS ===== */}
      <div className="home-features">
        <div className="feature-card">
          <div className="icon admin-icon">🏥</div>
          <h3>Admin Portal</h3>
          <p>
            Control hospital operations, manage doctors, patients,
            departments, and reports from one dashboard.
          </p>
          <Link to="/login" className="feature-link">
            Admin Login
          </Link>
        </div>

        <div className="feature-card">
          <div className="icon doctor-icon">🩺</div>
          <h3>Doctor Portal</h3>
          <p>
            View appointments, access patient records, prescribe medicines,
            and manage schedules easily.
          </p>
          <Link to="/login" className="feature-link">
            Doctor Login
          </Link>
        </div>

        <div className="feature-card">
          <div className="icon patient-icon">👨‍⚕️</div>
          <h3>Patient Portal</h3>
          <p>
            Book appointments, view medical history, download prescriptions,
            and track treatments online.
          </p>
          <Link to="/signup" className="feature-link">
            Patient Registration
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
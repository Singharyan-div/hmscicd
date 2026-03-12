import React from "react";


const AboutHospital = () => {
  return (
    <div className="about-hospital">
      <h2>About Our Hospital</h2>

      {/* Hospital Image */}
      <img
        src="/images/hospital.png"
        alt="Hospital Building"
        className="about-img"
      />

      <p className="intro">
        Our hospital is a multi-specialty healthcare institution committed to
        delivering high-quality, patient-centered medical services. We combine
        modern medical technology with experienced healthcare professionals to
        provide the best possible care.
      </p>

      <h3>Our Healthcare Services</h3>
      <ul className="services-list">
        <li>
          <strong>Outpatient & Inpatient Care:</strong> Fully equipped wards,
          ICUs, and emergency units.
        </li>
        <li>
          <strong>Doctor Consultation:</strong> Appointment scheduling with
          expert specialists.
        </li>
        <li>
          <strong>24/7 Emergency Services:</strong> Immediate medical care at
          any time.
        </li>
        <li>
          <strong>Diagnostic Services:</strong> Laboratory, X-ray, CT scan,
          MRI, and pathology.
        </li>
        <li>
          <strong>Surgical Services:</strong> Advanced operation theaters with
          post-operative care.
        </li>
        <li>
          <strong>Digital Records:</strong> Secure electronic patient records.
        </li>
      </ul>

      <h3>Our Medical Team</h3>

      {/* Doctors Image */}
      <img
        src="/images/doctors.png"
        alt="Doctors Team"
        className="about-img"
      />

      <p>
        Our doctors, nurses, and medical staff work together to provide
        compassionate and personalized care to every patient.
      </p>

      <h3>Advanced Medical Technology</h3>

      {/* Technology Image */}
      <img
        src="/images/technology.png"
        alt="Medical Technology"
        className="about-img"
      />

      <p>
        We use state-of-the-art medical equipment and digital systems to ensure
        accurate diagnosis, effective treatment, and efficient hospital
        operations.
      </p>

      <h3>Our Mission</h3>
      <p>
        To deliver accessible, affordable, and high-quality healthcare while
        maintaining compassion, integrity, and excellence.
      </p>

      <h3>Our Vision</h3>
      <p>
        To be a trusted healthcare provider known for innovation, safety, and
        patient satisfaction.
      </p>
    </div>
  );
};

export default AboutHospital;
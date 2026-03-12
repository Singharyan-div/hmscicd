import React from "react";

const Doctors = () => {
  const doctors = [
    { id: 1, name: "Dr. Arpit Kumar singh", specialty: "Cardiologist", image: "https://thumbs.dreamstime.com/b/young-male-doctor-close-up-happy-looking-camera-56751540.jpg" },
    { id: 2, name: "Dr. Anitha Sharma", specialty: "Neurologist", image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwZG9jdG9yfGVufDB8fDB8fHww" },
    { id: 3, name: "Dr. jai Singh", specialty: "Orthopedic Surgeon", image: "https://media.istockphoto.com/id/1468678624/photo/nurse-hospital-employee-and-portrait-of-black-man-in-a-healthcare-wellness-and-clinic-feeling.jpg?s=612x612&w=0&k=20&c=AGQPyeEitUPVm3ud_h5_yVX4NKY9mVyXbFf50ZIEtQI=" },
    { id: 4, name: "Dr. Aunrag ashu", specialty: "Pediatrician", image: "https://media.istockphoto.com/id/904793412/photo/close-up-of-happy-confident-doctor-looking-away.jpg?s=612x612&w=0&k=20&c=RXK0s0BK_sef8AQSA7tRl_MJwRlZn3fD6FG5OCmFWoY=" },
    { id: 5, name: "Dr. shubham ", specialty: "General Physician", image: "https://c8.alamy.com/comp/2M6WAAJ/confident-male-doctor-in-white-lab-coat-and-stethoscope-standing-with-folded-arms-smiling-at-the-camera-isolated-on-white-2M6WAAJ.jpg" },
    { id: 6, name: "Dr. Aman raj", specialty: "Gynecologist", image: "https://as2.ftcdn.net/v2/jpg/02/60/04/09/1000_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg" },
    { id: 7, name: "Dr. Aryan kumar meena", specialty: "Dermatologist", image: "https://www.shutterstock.com/image-photo/confident-friendly-indian-male-doctor-600w-2603862439.jpg" },
    { id: 8, name: "Dr. Arjun Nair", specialty: "ENT Specialist", image: "https://c8.alamy.com/comp/R40E3P/thoughtful-mature-indian-doctor-R40E3P.jpg" },
    { id: 9, name: "Dr. Sunita Gupta", specialty: "Radiologist", image: "https://c8.alamy.com/comp/CXKKFD/portrait-of-a-young-indian-doctor-CXKKFD.jpg" },
    { id: 10, name: "Dr. Ravi Verma", specialty: "Oncologist", image: "https://previews.123rf.com/images/muralinathypr/muralinathypr1207/muralinathypr120700048/14907702-portrait-of-indian-doctor.jpg" },
    { id: 11, name: "Dr. Lakshmi Das", specialty: "Psychiatrist", image: "https://images.picxy.com/cache/2020/7/28/732f561d83ed380218e4bebd84fffbfc.jpg" },
    { id: 12, name: "Dr. Karan Mehta", specialty: "Urologist", image: "https://c8.alamy.com/comp/WXGRY1/indian-doctor-mature-indian-male-medical-doctor-standing-isolated-on-white-background-handsome-indian-model-portrait-WXGRY1.jpg" },
  ];

  return (
    <div className="doctors">
      <h2>Our Expert Doctors</h2>
      <p className="doctor-intro">
        Our hospital is proud to have a team of highly qualified and experienced
        doctors dedicated to providing the best medical care. With specialists across
        all major departments, we ensure comprehensive healthcare for all our patients.
      </p>

      <div className="doctor-grid">
        {doctors.map((doctor) => (
          <div className="doctor-card" key={doctor.id}>
            <img src={doctor.image} alt={doctor.name} />
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
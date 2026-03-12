import React from "react";

const Departments = () => {
  const departments = [
    {
      name: "Cardiology",
      image: "/images/cardiology.jpg",
      description: "Heart care and cardiovascular treatments with advanced diagnostic equipment."
    },
    {
      name: "Neurology",
      image: "/images/neurology.jpg",
      description: "Brain and nervous system care with expert neurologists and modern facilities."
    },
    {
      name: "Orthopedics",
      image: "/images/orthopedics.jpg",
      description: "Bone, joint, and muscle care with surgical and non-surgical treatments."
    },
    {
      name: "Pediatrics",
      image: "/images/pediatrics.jpg",
      description: "Complete child healthcare from newborn care to adolescent medicine."
    },
    {
      name: "Gynecology",
      image: "/images/gynecology.jpg",
      description: "Women's health services including maternity and reproductive care."
    },
    {
      name: "Radiology",
      image: "/images/radiology.jpg",
      description: "Advanced imaging services including X-ray, CT, MRI, and ultrasound."
    }
  ];

  return (
    <div className="departments">
      <h2>Our Departments</h2>
      <p className="dept-intro">
        Our hospital features state-of-the-art departments equipped with modern
        technology and staffed by experienced specialists. Each department is
        dedicated to providing comprehensive care in their respective medical fields.
      </p>

      <div className="dept-grid">
        {departments.map((dept, index) => (
          <div className="dept-card" key={index}>
            <img src={dept.image} alt={dept.name} />
            <h3>{dept.name}</h3>
            <p>{dept.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
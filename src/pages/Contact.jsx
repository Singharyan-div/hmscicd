import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p className="contact-intro">
        We're here to help! Reach out to us for appointments, inquiries, or
        any assistance you need. Our dedicated team is available 24/7 to serve you.
      </p>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>📍 Hospital Address</h3>
          <p>
            MediCare Hospital<br />
            123 Healthcare Avenue<br />
            Medical District, City - 500001
          </p>

          <h3>📞 Phone Numbers</h3>
          <p>
            Emergency: +91 98765 43210<br />
            Reception: +91 98765 43211<br />
            Appointments: +91 98765 43212
          </p>

          <h3>📧 Email</h3>
          <p>
            General: info@medicare.com<br />
            Appointments: appointments@medicare.com<br />
            Careers: careers@medicare.com
          </p>

          <h3>⏰ Working Hours</h3>
          <p>
            Monday - Saturday: 8:00 AM - 9:00 PM<br />
            Sunday: 9:00 AM - 5:00 PM<br />
            Emergency: 24/7 Available
          </p>
        </div>

        <div className="contact-form">
          <h3>Send us a Message</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Full Name" required />
            <input type="email" placeholder="Your Email Address" required />
            <input type="tel" placeholder="Phone Number" />
            <textarea
              placeholder="How can we help you?"
              rows="5"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
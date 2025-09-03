import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>Lax Hospital</h1>
          <p>Your health is our priority. We provide world-class medical care.</p>
          <button>Learn More</button>
        </div>
      </div>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-cards">
          <div className="service-card">
            <h3>Cardiology</h3>
            <p>Heart care and treatment from top specialists.</p>
          </div>
          <div className="service-card">
            <h3>Pediatrics</h3>
            <p>Comprehensive care for children and newborns.</p>
          </div>
          <div className="service-card">
            <h3>Orthopedics</h3>
            <p>Advanced treatments for bone and joint health.</p>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="team-section">
        <h2>Meet Our Doctors</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src="doctor1.jpg" alt="Dr. Vijay" />
            <h4>Dr. Vijay</h4>
            <p>Cardiologist</p>
          </div>
          <div className="team-card">
            <img src="doctor2.jpg" alt="Dr. Meena" />
            <h4>Dr. Meena</h4>
            <p>Pediatrician</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Patient Testimonials</h2>
        <div className="testimonial-card">
          <p>"Excellent care! The staff is very friendly and professional."</p>
          <h4>- Rajesh</h4>
        </div>
        <div className="testimonial-card">
          <p>"I got timely treatment and support. Highly recommend Lax Hospital."</p>
          <h4>- Priya</h4>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="appointment-section">
        <h2>Book an Appointment</h2>
        <p>Get your appointment with our specialists quickly.</p>
        <button onClick={() => window.location.href='/appointments'}>Book Now</button>
      </section>

      {/* Health Tips Section */}
      <section className="health-tips-section">
        <h2>Health Tips</h2>
        <ul>
          <li>Stay hydrated and drink 8 glasses of water daily.</li>
          <li>Exercise regularly to maintain a healthy heart.</li>
          <li>Eat balanced meals with plenty of vegetables.</li>
        </ul>
      </section>

      {/* Footer Section */}
      <div className="home-container">
        <section className="footer-section">
          <div className="footer-columns">
            <div className="footer-column">
              <h4>About</h4>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Hospital Stories</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Address</h4>
              <p>123 Health Street</p>
              <p>Cityville, Country 45678</p>
              <p>Phone: +91 9822222210</p>
              <p>Email: info@laxhospital.com</p>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <p>Reception: +91 9822222210</p>
              <p>Emergency: +91 9800000552</p>
            </div>
            <div className="footer-column">
              <h4>Follow Us</h4>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            </div>
            <div className="footer-column enquiry-column">
              <h4>Enquiry</h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Enquiry submitted! Thank you.");
                }}
              >
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Message" rows="3" required />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
          <p className="footer-copy">© 2025 Lax Hospital. All Rights Reserved.</p>
        </section>
      </div>

    </div>
  );
}

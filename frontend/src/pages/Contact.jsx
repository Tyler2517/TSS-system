// frontend/src/pages/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <p>Get in touch with our team. We'd love to hear from you!</p>
      <div className="content-section">
        <h2>Contact Information</h2>
        <p>Email: contact@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main Street, City, Country</p>
        
        <h2>Send us a message</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your message"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
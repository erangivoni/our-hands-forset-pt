import React, { useState } from "react";
import "./contactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", phone: "+972 ", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2>צור קשר</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>שם מלא</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="הכנס את שמך"
            required
          />
        </div>
        <div className="form-group">
          <label>מספר טלפון</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="הכנס את מספר הטלפון שלך"
            required
          />
        </div>
        <div className="form-group">
          <label>אימייל</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="הכנס את האימייל שלך"
            required
          />
        </div>
        <div className="form-group">
          <label>הודעה</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="כתוב את ההודעה שלך כאן..."
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">שלח הודעה</button>
      </form>
    </div>
  );
};

export default ContactForm;

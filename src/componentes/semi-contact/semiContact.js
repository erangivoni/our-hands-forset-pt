import React, { useState } from "react";
import "./semiContact.css";

const SemiContact = () => {
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
    <div className="sem-contact-container">
      <h3>למידע נוסף ועדכונים בוואטסאפ </h3>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="שמך המלא"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="טלפון"
            required
          />
        </div>
        <button type="submit" className="submit-btn">שלח הודעה</button>
      </form>
    </div>
  );
};

export default SemiContact;


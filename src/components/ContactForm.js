// ContactForm.js
import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="container my-4">
      {" "}
      {/* Reduced margin from my-5 -> my-4 */}
      <div
        className="p-3 rounded shadow-lg"
        style={{
          backgroundColor: "#1e1e1e",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <h3 className="text-center mb-3 text-light">Send me a Message</h3>{" "}
        {/* Reduced mb-4 -> mb-3 */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-light">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control bg-dark text-light border-secondary"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-light">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control bg-dark text-light border-secondary"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-light">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control bg-dark text-light border-secondary"
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{
              padding: "10px",
              fontWeight: "bold",
              fontSize: "1.1rem",
              borderRadius: "8px",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState("");
  const [savedHint, setSavedHint] = useState(false);

  // Restore saved data
  useEffect(() => {
    const saved = localStorage.getItem("contactForm");

    if (saved) {
      setForm(JSON.parse(saved));
      setSavedHint(true);
    }
  }, []);

  // Auto save
  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(form));
  }, [form]);

  // Debounced Email Validation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        form.email &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
      ) {
        setEmailError("Please enter a valid email.");
      } else {
        setEmailError("");
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [form.email]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    toast.success("Message sent successfully!");

    localStorage.removeItem("contactForm");

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setErrors({});
    setSavedHint(false);
  }

  return (
    <section className="contact" id="contact">
      <ToastContainer />

      <div className="contact-card">

        <h2>Contact Me</h2>

        {savedHint && (
          <p style={{ color: "green" }}>
            You have unsent message data saved!
          </p>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          {errors.name && <small>{errors.name}</small>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />

          {errors.email && <small>{errors.email}</small>}
          {emailError && <small>{emailError}</small>}

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
          />

          {errors.message && <small>{errors.message}</small>}

          <button type="submit">
            Send Message
          </button>
        </form>

        <hr />

        <h3>Live Preview</h3>

        <p><strong>Name:</strong> {form.name}</p>

        <p><strong>Email:</strong> {form.email}</p>

        <p><strong>Message:</strong> {form.message}</p>

        </div>

    </section>
  );
}

export default Contact;

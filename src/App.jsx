import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import './App.css';

const App = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State for error messages
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to track if form was submitted
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Validate form fields when user submits
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    // Message validation
    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    // Return true if no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Set form as submitted
    setSubmitted(true);

    // Only submit if no errors
    if (validateForm()) {
      console.log("Form Submitted:", formData);
      setFormData({ name: '', email: '', message: '' }); // Reset form
      setErrors({}); // Reset errors
      setSubmitted(false); // Reset submission state
    } else {
      console.log("Form has errors, please fix them.");
    }
  };

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route
            path="/about"
            element={
              <div>
                <img
                  className="profile-img"
                  src="/assets/cartoon.png"
                  alt="Profile Picture"
                />
                <h2>About Me</h2>
                <p>This is about me.</p>
              </div>
            }
          />
          <Route
            path="/portfolio"
            element={
              <div>
                <h2>Portfolio</h2>
                <div>
                  <Project
                    title="Weather Dashboard"
                    description="App calls OpenWeather APIs to fetch and display five day forecast for any city"
                    imageUrl="/assets/weather-dashboard.png"
                  />
                  <Project
                    title="Project 2"
                    description="Description of Project 2"
                    imageUrl="https://via.placeholder.com/150"
                  />
                </div>
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div>
                <h2>Contact</h2>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={() => setSubmitted(true)} // Set submitted state on blur
                    />
                    {(submitted && errors.name) && <span className="error">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => setSubmitted(true)} // Set submitted state on blur
                    />
                    {(submitted && errors.email) && <span className="error">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => setSubmitted(true)} // Set submitted state on blur
                    />
                    {(submitted && errors.message) && <span className="error">{errors.message}</span>}
                  </div>

                  <button type="submit">Submit</button>
                </form>
              </div>
            }
          />
          <Route
            path="/resume"
            element={
              <div className="resume-container">
                {/* LinkedIn Badge */}
                <div
                  className="badge-base LI-profile-badge"
                  data-locale="en_US"
                  data-size="medium"
                  data-theme="light"
                  data-type="VERTICAL"
                  data-vanity="bryanesslinger"
                  data-version="v1"
                >
                </div>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
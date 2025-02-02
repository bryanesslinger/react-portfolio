import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Experience from "./components/Experience";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    if (validateForm()) {
      console.log("Form Submitted:", formData);
      setFormData({ name: "", email: "", message: "" }); // Reset form
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
            path="/"
            element={
              <div>
                <div className="gif-container">
                  <img
                    src="/assets/wave.gif"
                    alt="Animated GIF"
                    className="about-image"
                  />
                </div>
                <p>Greetings!</p>
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <p>
                  I love stories. Every day and every situation has its own.
                  Stories constantly stir my curiosity, in life and in my career.
                  Here's a look at my story so far.
                </p>
                <img
                  src="/assets/home.png"
                  alt="Bryan"
                  className="about-image"
                />
                <p>
                  I’m a product-focused professional with over 12 years of
                  experience in the tech world, currently serving as a Senior
                  Product Manager at{" "}
                  <a href="https://leagueapps.com/" target="_blank">
                    LeagueApps
                  </a>
                  . My work is centered around using technology and process to
                  solve complex business problems. At LeagueApps, I lead product
                  strategy and development for our scheduling tools,
                  collaborating with engineering, design, and QA teams to drive
                  growth in the youth sports industry. I've been at LeagueApps
                  since inception, so I've experience all of the startup growing
                  pains for over a decade. For all you parents out there with
                  young kids playing sports, I'm working every day to make your
                  lives easier. You deserve it.
                </p>
                <img
                  src="/assets/leagueapps-cartoon.png"
                  alt="LeagueApps Ess Cartoon"
                  className="about-image"
                />
                <p>
                  To grow as a well-rounded leader in the software industry, I
                  pursued a Full Stack Coding Bootcamp through Columbia
                  University in 2024-25. This experience deepened my
                  understanding of product development, improving my ability to
                  communicate with cross-functional teams and drive innovation.
                  It expanded my technical skills and reinforced my commitment
                  to staying ahead of industry trends while fostering a more
                  holistic approach to leadership.
                </p>
                <img
                  src="/assets/work.png"
                  alt="Bryan on laptop"
                  className="about-image"
                />
                <p>
                  Outside of work, I’m a proud Delaware native and University of
                  Delaware alum. Whether it’s the Delaware shores or the lively
                  boardwalk of OCMD, you’ll often find me prioritizing beach
                  trips over anything else. When I’m not soaking up the sun, I’m
                  a self-proclaimed foodie who loves cooking and experimenting
                  with new recipes—the kitchen is where I unleash my creativity
                  when I’m not focused on product roadmaps.
                </p>
                <img
                  src="/assets/chef.png"
                  alt="Bryan Cooking"
                  className="about-image"
                />
                <p>
                  Music is also a big part of my life. I’m always discovering
                  new sounds, putting together playlists, and going to live
                  shows. There’s something special about how a song can
                  instantly take you back to a moment, with all the memories
                  that come with it. Growing up in the 90s definitely shaped my
                  taste - it’s pretty eclectic and gnarly. I love classic rock
                  from the 60's and 70's, 80's avante-garde, 90's hip hop,
                  2000's alternative, and the growing indie scene since.
                  <a
                    href="https://open.spotify.com/user/bmorebry?si=95e50a9eef8f4157"
                    target="_blank"
                  >
                    {" "}
                    Follow me on Spotify
                  </a>{" "}
                  and check out my playlists.
                </p>
                <img
                  src="/assets/concert.png"
                  alt="Bryan at Brooklyn Made"
                  className="about-image"
                />
                <p>
                  Since 2012 I’ve called New York City home. I love the city’s
                  energy, the walking lifestyle, and the endless opportunities
                  to explore. NYC continues to fuel my curiosity and creativity,
                  and every day here is an exciting adventure. My Google map
                  favorites lists grow daily!
                </p>
                <img
                  src="/assets/nyc.png"
                  alt="West Village"
                  className="about-image"
                />
                <p>
                  Baltimore is like a second home to me, where my extended
                  family lives and we’re avid Orioles and Ravens fans. Sports
                  have always influenced my life, and I believe, as Nelson
                  Mandela said, they have the power to change the world. That’s
                  why working in the sports tech industry is so meaningful to
                  me—helping provide kids with more opportunities to play and
                  learn life lessons that shape them into better people.
                </p>
                <img
                  src="/assets/ravens.png"
                  alt="Farjer and Sons at Ravens"
                  className="about-image"
                />
                <p>
                  In everything I do, whether it's work or personal life, I’m
                  driven by curiosity, creativity, and a passion for making
                  meaningful connections with people and the world around me.
                </p>
              </div>
            }
          />
          <Route
            path="/portfolio"
            element={
              <div className="portfolio-container">
                <p>
                  Below are a few of my favorite projects that I've worked on
                  and played different roles in.
                </p>
                <div className="projects-grid">
                  <Project
                    title="MLB RBI"
                    description="Oversaw the implementation and website design for the Los Angeles Dodgers' digital transformation of their flagship youth initiative, Reviving Baseball in Inner Cities (RBI)."
                    imageUrl="/assets/dodgers-rbi.png"
                    linkUrl="https://www.mlb.com/rbi"
                  />
                  <Project
                    title="Jr. NBA"
                    description="Directed the implementation and website design for the National Basketball Association's digital transformation of their youth initiatives, Jr. NBA and WNBA."
                    imageUrl="/assets/jr-nba.png"
                    linkUrl="https://jr.nba.com/"
                  />
                  <Project
                    title="Madison Square Garden"
                    description="Coordinated the integration and process for Jr. Knicks, Jr. Rangers, Jr. Liberty, and Rockettes teams to use LeagueApps."
                    imageUrl="/assets/jr-rangers.png"
                    linkUrl="https://www.nhl.com/rangers/community/junior-rangers/"
                  />
                  <Project
                    title="Custom Drag & Drop Calendar"
                    description="Led requirements for data-rich, custom drag-and-drop scheduler with conflict logic for youth sports organizations, powered by React and microservices."
                    imageUrl="/assets/calendar-view.png"
                    linkUrl="https://support.leagueapps.com/hc/en-us/articles/10579170260119-How-do-I-schedule-tournaments"
                  />
                  <Project
                    title="Custom Schedule List"
                    description="Led requirements for mobile-optimized list view with bulk action capabilities, built using React and microservices, and integrated with the AG Grid library."
                    imageUrl="/assets/list-view.png"
                    linkUrl="https://support.leagueapps.com/hc/en-us/articles/23315644300183-New-Club-Scheduling-Experience"
                  />
                  <Project
                    title="LeagueApps Play App"
                    description="Led the team in building the first app for iOS and Android, and developed the process for creating branded apps for customers."
                    imageUrl="/assets/play.png"
                    linkUrl="https://leagueapps.com/leagueapps-play-mobile-app/"
                  />
                  <Project
                    title="Weather Dashboard"
                    description="App calls OpenWeather APIs to fetch and display five-day forecast for any city."
                    imageUrl="/assets/weather-dashboard.png"
                    linkUrl="https://github.com/bryanesslinger/weather-dashboard"
                  />
                  <Project
                    title="Vehicle Builder"
                    description="TypeScript command-line application using Inquirer."
                    imageUrl="/assets/vehicle-builder.png"
                    linkUrl="https://github.com/bryanesslinger/vehicle-builder"
                  />
                  <Project
                    title="Employee Tracker"
                    description="Command-line application to manage a company's employee database, using Node.js, Inquirer, and PostgreSQL."
                    imageUrl="/assets/employee-tracker.png"
                    linkUrl="https://github.com/bryanesslinger/employee-tracker"
                  />
                </div>
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div>
                <p> Tell me a story!</p>
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
                      onBlur={() => setSubmitted(true)}
                    />
                    {submitted && errors.name && (
                      <span className="error">{errors.name}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => setSubmitted(true)}
                    />
                    {submitted && errors.email && (
                      <span className="error">{errors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => setSubmitted(true)}
                    />
                    {submitted && errors.message && (
                      <span className="error">{errors.message}</span>
                    )}
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
                <a
                  href="https://www.linkedin.com/in/bryanesslinger/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/linkedin.png"
                    alt="LinkedIn Profile"
                    className="linkedin-icon"
                    width="500"
                  />
                </a>
              </div>
            }
          />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

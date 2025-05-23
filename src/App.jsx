import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Experience from "./components/Experience";
import emailjs from '@emailjs/browser';
import "./App.css";

// Initialize EmailJS
emailjs.init("4e73ZFCZDBErolPjB");

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
  const [emailStatus, setEmailStatus] = useState({
    loading: false,
    success: false,
    error: false
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmailStatus({ loading: true, success: false, error: false });

    if (validateForm()) {
      try {
        await emailjs.sendForm(
          'service_pyld18f',
          'template_e3gp2gr',
          e.target,
          '4e73ZFCZDBErolPjB'
        );

        setEmailStatus({ loading: false, success: true, error: false });
        setFormData({ name: "", email: "", message: "" }); // Reset form
        setErrors({}); // Reset errors
      } catch (error) {
        console.error('Error sending email:', error);
        setEmailStatus({ loading: false, success: false, error: true });
      }
    } else {
      setEmailStatus({ loading: false, success: false, error: false });
      console.log("Form has errors, please fix them.");
    }
    setSubmitted(false);
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
                  I love stories. Every day and every situation has its own -
                  they constantly stir my curiosity. Here's a look at mine so
                  far.
                </p>
                <img
                  src="/assets/home.png"
                  alt="Bryan"
                  className="about-image"
                />
                <p>
                  I'm an empathetic problem solver focused on delivering
                  impactful solutions. Over the course of my career, I've helped
                  build and scale a software company that empowers organizations
                  to transition online and grow. I've worked closely with
                  hundreds of businesses—from small local organizations to
                  global brands—helping them streamline operations, manage
                  member databases, process payments, and integrate seamlessly
                  with their tech stack. As one of the first ten employees at
                  LeagueApps, I've played a key role in driving growth, helping
                  the company scale from startup to serving over 3,000 customers
                  and 30M users.
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
                  holistic approach to leadership. I've learned to love coding
                  and creating my own projects - I built this very site from
                  scratch using React!
                </p>
                <img
                  src="/assets/work.png"
                  alt="Bryan on laptop"
                  className="about-image"
                />
                <p>
                  Outside of work, I'm a proud Delaware native and University of
                  Delaware alum. Whether it's the Delaware shores or the lively
                  boardwalk of OCMD, you'll often find me prioritizing beach
                  trips. When I'm not soaking up the sun, I'm a self-proclaimed
                  foodie who loves cooking and experimenting with new
                  recipes—the kitchen is where I unleash my creativity when I'm
                  not focused on product roadmaps.
                </p>
                <img
                  src="/assets/chef.png"
                  alt="Bryan Cooking"
                  className="about-image"
                />
                <p>
                  Music is also a big part of my life. I'm always discovering
                  new sounds, putting together playlists, and going to live
                  shows. I've always been drawn to how a song can instantly take
                  you back to a moment, with all the memories that come with it.
                  Growing up in the eclectic 90s definitely shaped my taste. I
                  love classic rock from the 60's and 70's, 80's avante-garde,
                  90's hip hop, 2000's alternative, and the growing indie scene
                  since.
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
                  Since 2012 I've called New York City home. I love the city's
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
                  Baltimore is like a second home to me, it's where my family
                  roots are and it's where you'll find me for several holidays
                  and events throughout the year. We're avid Orioles and Ravens
                  fans. Sports have always had a big influence in my life, and I
                  believe, as Nelson Mandela said, they have the power to change
                  the world. That's why working in the sports tech industry is
                  so meaningful to me—helping provide kids with more
                  opportunities to play and learn life lessons that shape them
                  into better people.
                </p>
                <img
                  src="/assets/ravens.png"
                  alt="Farjer and Sons at Ravens"
                  className="about-image"
                />
                <p>
                  In everything I do, whether it's work or personal life, I'm
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
                    title="LeagueApps Gateway"
                    description="Product Manager for the payments team responsible for developing an integrated in-product payment processor using Stripe Connect, streamlining payment collection and significantly improving company profit margins."
                    imageUrl="/assets/leagueapps-gateway.png"
                    linkUrl="https://leagueapps.com/youth-sports-management-platform/payments/"
                  />
                  <Project
                    title="LeagueApps Play App"
                    description="Product manager for the native mobile team, taking LeagueApps Play from 0->1, used by millions of players, parents, and coaches."
                    imageUrl="/assets/play.png"
                    linkUrl="https://leagueapps.com/leagueapps-play-mobile-app/"
                  />
                  <Project
                    title="LeagueApps Design Shop"
                    description="Spearheaded Design Shop, a professional web design service powered on Wordpress, scaling it from contractor based to full in-house team generating revenue."
                    imageUrl="/assets/designshop.gif"
                    linkUrl="https://join.leagueapps.com/designshop"
                  />
                    <Project
                    title="LeagueApps Facilities"
                    description="Led integration implementation and GTM for new product line, making significant impact on enterprise customer growth."
                    imageUrl="/assets/facilities.png"
                    linkUrl="https://leagueapps.com/youth-sports-management-platform/facilities/"
                  />
                  <Project
                    title="MLB RBI"
                    description="Collaborated with the Los Angeles Dodgers' team to implement a digital transformation for their youth initiative, Reviving Baseball in Inner Cities (RBI), by providing innovative technology solutions for a modernized website experience."
                    imageUrl="/assets/dodgers-rbi.png"
                    linkUrl="https://www.mlb.com/rbi"
                  />
                  <Project
                    title="Jr. NBA"
                    description="Worked closely with the NBA's team to develop and implement technology solutions for the Jr. NBA and WNBA programs, enhancing their digital platforms to better serve young basketball players and their communities."
                    imageUrl="/assets/jr-nba.png"
                    linkUrl="https://jr.nba.com/"
                  />
                  <Project
                    title="Madison Square Garden"
                    description="Partnered with Madison Square Garden's team to integrate LeagueApps for the Jr. Knicks, Jr. Rangers, Jr. Liberty, and Rockettes, providing efficient technology solutions to streamline team management and operations."
                    imageUrl="/assets/jr-knicks.png"
                    linkUrl="https://www.nba.com/knicks/junior"
                  />
                  <Project
                    title="Photo Trace"
                    description="PhotoTrace helps you uncover the hidden stories behind old photos by using AI to predict where and when they were taken."
                    imageUrl="/assets/photo-trace2.png"
                    linkUrl="https://photo-trace-client.onrender.com/"
                  />
                 <Project
                    title="Word Guess"
                    description="PhotoTrace helps you uncover the hidden stories behind old photos by using AI to predict where and when they were taken."
                    imageUrl="/assets/word-guess.png"
                    linkUrl="https://main.d1mdu2ha8sopcx.amplifyapp.com/"
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
                <p> Tell me something good!</p>
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

                  <button 
                    type="submit" 
                    disabled={emailStatus.loading}
                    className={emailStatus.loading ? 'loading' : ''}
                  >
                    {emailStatus.loading ? 'Sending...' : 'Submit'}
                  </button>

                  {emailStatus.success && (
                    <p className="success-message">
                      Thank you for your message! I'll get back to you soon.
                    </p>
                  )}

                  {emailStatus.error && (
                    <p className="error-message">
                      Sorry, there was an error sending your message. Please try again later.
                    </p>
                  )}
                </form>
              </div>
            }
          />
          <Route
            path="/resume"
            element={
              <div className="resume-container">
                <iframe
                  src="https://docs.google.com/document/d/e/2PACX-1vT-vq2fFGW8vaf_1I98ZmqiIyN5lLNLlLYYquB3_cMMJZ0tGrs1Rf-YJtLWlSH5nOUbCo-ZCdadzb8x/pub?embedded=true"
                  width="75%"
                  height="2050px"
                  frameBorder="0"
                  title="Resume"
                ></iframe>
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

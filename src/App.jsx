import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import emailjs from "@emailjs/browser";
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
    error: false,
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
          "service_pyld18f",
          "template_e3gp2gr",
          e.target,
          "4e73ZFCZDBErolPjB"
        );

        setEmailStatus({ loading: false, success: true, error: false });
        setFormData({ name: "", email: "", message: "" }); // Reset form
        setErrors({}); // Reset errors
      } catch (error) {
        console.error("Error sending email:", error);
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
                  I love stories. Every day and every situation has its own,
                  and they constantly stir my curiosity. Here's a look at mine
                  so far.
                </p>
                <img
                  src="/assets/bryan-new.png"
                  alt="Bryan"
                  className="about-image"
                />
                <p>
                  I'm a product leader who works where customers, data, and
                  technology meet. My path into product wasn't a straight line,
                  and I think that's my edge. I spent 13 years at LeagueApps as
                  one of the first ten employees. I started in sales, built the
                  customer success organization from the ground up, and ran
                  implementations for hundreds of organizations, from local
                  leagues to global brands, before moving into product. Along
                  the way the company grew from a startup to serving 3,000+
                  customers and 30M users.
                </p>
                <img
                  src="/assets/leagueapps-cartoon.png"
                  alt="LeagueApps Ess Cartoon"
                  className="about-image"
                />
                <p>
                  In 2025 I joined OnRamp, a Series A customer onboarding
                  platform, as a founding product manager, building the product
                  function from scratch. It was a full-circle moment. After
                  years of running onboardings out of spreadsheets and
                  whiteboards, I got to build the tool I wished I'd had. I set
                  up the roadmap, planning, and release processes, shipped the
                  company's first AI feature, and led a reporting overhaul aimed
                  at the biggest gap in the sales pipeline.
                </p>
                <p>
                  In 2026 I joined Intellum, an enterprise learning platform
                  used by companies like Google, Meta, and Amazon to educate
                  their employees, partners, and customers. As a Senior Product
                  Manager, I lead AI and platform strategy, building
                  conversational agents, MCP tooling that lets customers bring
                  Intellum into their own AI agents, and the data and
                  integration infrastructure that connects learning to the rest
                  of their tech stack.
                </p>
                <p>
                  In 2024–25 I completed Columbia's Full Stack Coding Bootcamp
                  because I wanted to understand the craft my engineering
                  partners work in every day. It changed how I operate: I write
                  SQL, dig into APIs, prototype my own ideas, and I built this
                  site from scratch in React. These days most of my weekend
                  projects are built alongside AI, including a World Cup bracket
                  simulator, an agent that answers questions about live NFL
                  data, and a photo recognition app to help my grandma place the
                  date and locations of old photos where it wasn't written on
                  the back. Building with AI on the weekends makes me sharper at
                  building it into products during the week.
                </p>
                <img
                  src="/assets/work.png"
                  alt="Bryan on laptop"
                  className="about-image"
                />
                <p>
                  Outside of work, I'm a proud Delaware native, a University of
                  Delaware alum, and a beach bum at heart. Whether it's the
                  Delaware shores or the OCMD boardwalk, beach trips always make
                  the calendar. The kitchen is my creative outlet. I cook
                  seriously and experiment constantly. Guy Fieri's life on
                  Diners Drive-Ins and Dives is my dream. When I'm not cooking,
                  I'm working through an ever-growing list of NYC restaurants.
                </p>
                <img
                  src="/assets/chef.png"
                  alt="Bryan Cooking"
                  className="about-image"
                />
                <p>
                  Music is a big part of my life too. I'm always discovering new
                  sounds, building playlists, and going to live shows. I love
                  how a song can instantly take you back to a moment and
                  everything that came with it. Growing up in the eclectic '90s
                  shaped my taste: '60s and '70s classic rock, '80s
                  avant-garde, '90s hip hop, 2000s alternative, and the indie
                  scene that's grown since.
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
                  New York City has been home since 2012. I love the energy, the
                  walking lifestyle, and the fact that there's always something
                  new to explore. My Google Maps lists grow daily.
                </p>
                <img
                  src="/assets/nyc.png"
                  alt="West Village"
                  className="about-image"
                />
                <p>
                  Baltimore is my second home. It's where my family roots are
                  and where you'll find me for holidays throughout the year.
                  We're Orioles and Ravens fans through and through, and sports
                  have always been a big part of my life, from Camden Yards to
                  more fantasy leagues than I'd like to admit. My favorite
                  title, though, is cool uncle to my two nieces.
                </p>
                <img
                  src="/assets/ravens.png"
                  alt="Farjer and Sons at Ravens"
                  className="about-image"
                />
                <p>
                  In everything I do, I'm driven by curiosity, creativity, and a
                  passion for making meaningful connections with people and the
                  world around me.
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
                    title="OnRamp AI"
                    description="Led 0→1 development and launch of OnRamp AI, establishing the platform's intelligent co-pilot foundation that surfaces predictive insights—building core capabilities for future workflow automation and personalization."
                    imageUrl="/assets/onramp-ai.png"
                    linkUrl="https://onramp.us/ai"
                  />

                  <Project
                    title="LeagueApps Gateway"
                    description="Co-led build of payments platform leveraging Stripe Connect to improve unit economics and reduce customer payment friction across the entire LeagueApps ecosystem - now processing $1B+ in annual transactions."
                    imageUrl="/assets/leagueapps-gateway.png"
                    linkUrl="https://leagueapps.com/youth-sports-management-platform/payments/"
                  />
                  <Project
                    title="LeagueApps Play App"
                    description="Led 0→1 development of native iOS/Android app, now serving 250K+ monthly active users (players, parents, and coaches) to manage their sports experience and stay connected with their teams."
                    imageUrl="/assets/play.png"
                    linkUrl="https://leagueapps.com/leagueapps-play-mobile-app/"
                  />
                  <Project
                    title="LeagueApps Design Shop"
                    description="Owned professional WordPress web development service, scaling from contractor model to in-house team generating $1M+ ARR while serving SMB customers with turnkey digital presence."
                    imageUrl="/assets/designshop.gif"
                    linkUrl="https://join.leagueapps.com/designshop"
                  />
                  <Project
                    title="LeagueApps Facilities"
                    description="Led 0→1 development of facility management product line, generating ~$500K combined new sales and retained ARR in year one while expanding enterprise customer footprint."
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
                    className={emailStatus.loading ? "loading" : ""}
                  >
                    {emailStatus.loading ? "Sending..." : "Submit"}
                  </button>

                  {emailStatus.success && (
                    <p className="success-message">
                      Thank you for your message! I'll get back to you soon.
                    </p>
                  )}

                  {emailStatus.error && (
                    <p className="error-message">
                      Sorry, there was an error sending your message. Please try
                      again later.
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
                <Resume />
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

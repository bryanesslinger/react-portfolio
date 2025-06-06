import React, { useState } from "react";

const Resume = () => {
  const [expandedRoles, setExpandedRoles] = useState({});

  const toggleRole = (roleId) => {
    setExpandedRoles(prev => ({
      ...prev,
      [roleId]: !prev[roleId]
    }));
  };

  return (
    <div className="resume-content">
      <a
        href="/assets/Bryan_Esslinger_Resume.pdf"
        download="Bryan_Esslinger_Resume.pdf"
        className="download-button"
      >
        Download PDF
      </a>

      <section className="resume-section">
        <h2>PROFESSIONAL SUMMARY</h2>
        <p>
          Senior Product Manager with expertise in data-led, user-centric
          solutions, delivering intuitive SaaS products that increase adoption
          and revenue. Skilled in end-to-end product strategy, cross-functional
          collaboration, and optimizing experiences for both businesses and
          consumers.
        </p>
      </section>

      <section className="resume-section">
        <h2>WORK EXPERIENCE</h2>
        <div className="experience-item">
          <div className="company-header">
            <div className="company-title">
              <img
                src="/assets/leagueapps.png"
                alt="LeagueApps Logo"
                className="company-logo"
              />
              <h3>LeagueApps</h3>
            </div>
            <span className="location">New York, NY</span>
          </div>

          <div className="role">
            <h4>Senior Product Manager</h4>
            <span className="date">December 2021 – Present</span>
            <button 
              className="toggle-button"
              onClick={() => toggleRole('senior-pm')}
              aria-expanded={expandedRoles['senior-pm']}
            >
              {expandedRoles['senior-pm'] ? '−' : '+'}
            </button>
          </div>
          <div className={`achievements ${expandedRoles['senior-pm'] ? 'expanded' : 'collapsed'}`}>
            <p>
              Own end-to-end product strategy and roadmap for the scheduling
              product, applying machine learning through integrated solutions to
              automate data mapping and reduce friction, while shaping a broader
              AI-driven strategy to resolve complex logistical conflicts.
            </p>
            <p>
              Increased adoption of the schedule product by 15%, increasing both
              customer retention and sales revenue.
            </p>
            <p>
              Drove a 20% gain in developer efficiency by transitioning core
              internal tools from a monolithic architecture to microservices,
              aligning with Agile SDLC principles.
            </p>
            <p>
              Partnered with engineering and product design teams to establish a
              platform-wide design system, ensuring consistent UX and
              accelerating development across multiple product lines.
            </p>
            <p>
              Led 0→1 product development and GTM of{" "}
              <a
                href="https://leagueapps.com/youth-sports-management-platform/facilities/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LeagueApps Facilities
              </a>
              , integrating third-party booking tools to enable facility
              inventory management—driving ~$500K in combined new enterprise
              sales and retained ARR in year 1.
            </p>
          </div>

          <div className="role">
            <h4>Product Manager</h4>
            <span className="date">March 2017 – November 2021</span>
            <button 
              className="toggle-button"
              onClick={() => toggleRole('pm')}
              aria-expanded={expandedRoles['pm']}
            >
              {expandedRoles['pm'] ? '−' : '+'}
            </button>
          </div>
          <div className={`achievements ${expandedRoles['pm'] ? 'expanded' : 'collapsed'}`}>
            <p>
              Oversaw discovery, design, implementation, and release of 50+
              products and features across registration, payments,
              communication, scheduling, reporting, CMS, API, and iOS/Android
              app components.
            </p>
            <p>
              Collaborated cross-functionally to develop{" "}
              <a
                href="https://leagueapps.com/youth-sports-management-platform/payments/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LeagueApps Gateway
              </a>
              , a Stripe Connect-powered internal platform supporting customer
              payments and accounting workflows
            </p>
            <p>
              Led 0→1 development and launch of{" "}
              <a
                href="https://leagueapps.com/leagueapps-play-mobile-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LeagueApps Play
              </a>
              , a native iOS/Android app now used by millions of parents,
              players, and coaches.
            </p>
            <p>
              Owned{" "}
              <a
                href="https://join.leagueapps.com/designshop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Design Shop
              </a>
              , a WordPress-based web design service, securing $900K in
              first-year revenue and scaling to $1M+ ARR by building an in-house
              agency.
            </p>
            <p>
              Launched the{" "}
              <a
                href="https://leagueapps.com/youth-sports-management-platform/integrations/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LeagueApps Integration Center
              </a>{" "}
              and{" "}
              <a
                href="https://zapier.com/apps/leagueapps/integrations"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zapier App Store listing
              </a>
              , enabling no-code and API-based workflows that supported hundreds
              of enterprise customers—contributing to ~$5M+ in influenced ARR
              through sales enablement and churn prevention over time.
            </p>
          </div>

          <div className="role">
            <h4>Product Marketing Manager</h4>
            <span className="date">May 2016 – March 2017</span>
            <button 
              className="toggle-button"
              onClick={() => toggleRole('pmm')}
              aria-expanded={expandedRoles['pmm']}
            >
              {expandedRoles['pmm'] ? '−' : '+'}
            </button>
          </div>
          <div className={`achievements ${expandedRoles['pmm'] ? 'expanded' : 'collapsed'}`}>
            <p>
              Established business objectives and success metrics for new
              features.
            </p>
            <p>
              Led GTM strategies for dozens of launches, creating help articles,
              videos, and hosting webinars to drive adoption.
            </p>
            <p>
              Conducted market intelligence and competitive analyses,
              coordinating sales engineering and support to shape product
              positioning.
            </p>
          </div>

          <div className="role">
            <h4>Manager, Customer Success & Onboarding</h4>
            <span className="date">July 2015 – April 2016</span>
            <button 
              className="toggle-button"
              onClick={() => toggleRole('cs-manager')}
              aria-expanded={expandedRoles['cs-manager']}
            >
              {expandedRoles['cs-manager'] ? '−' : '+'}
            </button>
          </div>
          <div className={`achievements ${expandedRoles['cs-manager'] ? 'expanded' : 'collapsed'}`}>
            <p>
              Managed a team of four direct reports while activating 300+
              enterprise and strategic accounts, generating $5M+ in ARR,
              including the company's first professional league partnerships
              with Madison Square Garden, Major League Baseball, and the NBA.
            </p>
            <p>
              Built and implemented the company's Salesforce instance from the
              ground up, replacing manual workflows with structured processes to
              automate the sales-to-launch handoff and enable data-driven
              insights into churn and opportunity loss across accounts and
              demos.
            </p>
            <p>
              Increased customer activation by 10% by creating a self-service
              checklist that streamlined onboarding.
            </p>
          </div>

          <div className="role">
            <h4>Customer Success Lead</h4>
            <span className="date">March 2014 – June 2015</span>
            <button 
              className="toggle-button"
              onClick={() => toggleRole('cs-lead')}
              aria-expanded={expandedRoles['cs-lead']}
            >
              {expandedRoles['cs-lead'] ? '−' : '+'}
            </button>
          </div>
          <div className={`achievements ${expandedRoles['cs-lead'] ? 'expanded' : 'collapsed'}`}>
            <p>
              Executed onboarding for 200+ accounts, ensuring smooth transitions
              from sales.
            </p>
            <p>
              Overhauled the sales-to-launch handoff process, significantly
              increasing conversion rates.
            </p>
            <p>
              Recruited, hired, trained, and managed a high-performing team.
            </p>
            <p>
              Developed and streamlined customer and internal feature request
              and backlog management processes.
            </p>
          </div>

          <div className="role">
            <h4>Customer Success Specialist</h4>
            <span className="date">January 2013 – February 2014</span>
            <button 
              className="toggle-button"
              onClick={() => toggleRole('cs-specialist')}
              aria-expanded={expandedRoles['cs-specialist']}
            >
              {expandedRoles['cs-specialist'] ? '−' : '+'}
            </button>
          </div>
          <div className={`achievements ${expandedRoles['cs-specialist'] ? 'expanded' : 'collapsed'}`}>
            <p>
              Led the creation and optimization of the user onboarding (launch)
              process.
            </p>
            <p>
              Executed onboarding for 100+ assigned accounts, ensuring efficient
              transitions from sales.
            </p>
            <p>
              Developed and implemented a customer support strategy for content,
              inbound emails, and live chat via ZenDesk, improving user support
              efficiency and experience.
            </p>
          </div>

          <div className="role">
            <h4>Inbound Marketing Intern</h4>
            <span className="date">June 2012 – December 2012</span>
            <button 
              className="toggle-button"
              onClick={() => toggleRole('marketing-intern')}
              aria-expanded={expandedRoles['marketing-intern']}
            >
              {expandedRoles['marketing-intern'] ? '−' : '+'}
            </button>
          </div>
          <div className={`achievements ${expandedRoles['marketing-intern'] ? 'expanded' : 'collapsed'}`}>
            <p>
              Created and streamlined company's first sales qualification lead
              scoring system, and led prospecting through manual web search and
              social media outreach.
            </p>
            <p>
              Used data driven insights on account creation click paths and
              conversions via Google Analytics, experiemented with A/B testing
              for account creation form on leagueapps.com.
            </p>
            <p>
              Conducted keyword research and implemented search strategies for
              leagueApps.com via Google AdWords.
            </p>
            <p>
              Managed all company social media accounts, composed content for
              monthly newsletters, and led company blog.
            </p>
          </div>
        </div>

        <div className="experience-item">
          <div className="company-header">
            <div className="company-title">
              <img
                src="/assets/dreamscape-marketing.png"
                alt="Dreamscape Marketing Logo"
                className="company-logo"
              />
              <h3>Dreamscape Marketing, LLC</h3>
            </div>
            <span className="location">Newark, DE</span>
          </div>

          <div className="role">
            <h4>Account Manager</h4>
            <span className="date">June 2011 – June 2012</span>
            <button 
              className="toggle-button"
              onClick={() => toggleRole('account-manager')}
              aria-expanded={expandedRoles['account-manager']}
            >
              {expandedRoles['account-manager'] ? '−' : '+'}
            </button>
          </div>
          <div className={`achievements ${expandedRoles['account-manager'] ? 'expanded' : 'collapsed'}`}>
            <p>
              Juggled account management responsibilities while completing
              undergraduate degree, gaining early hands-on experience in digital
              marketing and web development.
            </p>
            <p>
              Conducted usability testing and provided UX feedback that directly
              informed client website redesigns across healthcare and education
              verticals.
            </p>
            <p>
              Collaborated with the design team on front-end website builds,
              applying basic HTML/CSS and CMS tools to streamline site launches.
            </p>
            <p>
              Researched SEO trends and wrote keyword-rich blog content that
              helped clients improve search visibility and inbound traffic.
            </p>
          </div>
        </div>

        <div className="experience-item">
          <div className="company-header">
            <div className="company-title">
              <img
                src="/assets/ups.png"
                alt="UPS Logo"
                className="company-logo"
              />
              <h3>UPS</h3>
            </div>
            <span className="location">Newark, DE</span>
          </div>

          <div className="role">
            <h4>Package Loader</h4>
            <span className="date">July 2009 – February 2012</span>
            <button 
              className="toggle-button"
              onClick={() => toggleRole('package-loader')}
              aria-expanded={expandedRoles['package-loader']}
            >
              {expandedRoles['package-loader'] ? '−' : '+'}
            </button>
          </div>
          <div className={`achievements ${expandedRoles['package-loader'] ? 'expanded' : 'collapsed'}`}>
            <p className="company-description">
              Haulin' cube to pay for college!
            </p>
          </div>
        </div>

        <div className="experience-item">
          <div className="company-header">
            <div className="company-title">
              <img
                src="/assets/udel.png"
                alt="University of Delaware Logo"
                className="company-logo"
              />
              <h3>University of Delaware</h3>
            </div>
            <span className="location">Newark, DE</span>
          </div>

          <div className="role">
            <h4>Video Coordinator, Football Program</h4>
            <span className="date">August 2009 – April 2011</span>
            <button 
              className="toggle-button"
              onClick={() => toggleRole('video-coordinator')}
              aria-expanded={expandedRoles['video-coordinator']}
            >
              {expandedRoles['video-coordinator'] ? '−' : '+'}
            </button>
          </div>
          <div className={`achievements ${expandedRoles['video-coordinator'] ? 'expanded' : 'collapsed'}`}>
            <p>
              Supported the Division I football coaching staff by filming and
              editing daily practices and scrimmages, enabling detailed
              performance review and game prep.
            </p>
            <p>
              Digitally organized and archived footage to ensure easy access for
              coaches and players, improving the team's weekly film workflow.
            </p>
            <p>
              Balanced this role alongside a full academic course load,
              demonstrating strong time management and commitment to
              high-performance environments.
            </p>
          </div>

          <div className="role">
            <h4>Media Relations Intern</h4>
            <span className="date">September 2010 – December 2010</span>
            <button 
              className="toggle-button"
              onClick={() => toggleRole('media-intern')}
              aria-expanded={expandedRoles['media-intern']}
            >
              {expandedRoles['media-intern'] ? '−' : '+'}
            </button>
          </div>
          <div className={`achievements ${expandedRoles['media-intern'] ? 'expanded' : 'collapsed'}`}>
            <p>
              Contributed to the 2011 University of Delaware football media
              guide by supporting content creation and image editing.
            </p>
            <p>
              Assisted media relations staff during basketball games, providing
              real-time score updates and supporting press and in-game media
              operations.
            </p>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>SKILLS</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Product Leadership</h3>
            <p>
              Strategy | Roadmapping | Requirements Analysis | Prioritization |
              Technical Tradeoffs
            </p>
          </div>
          <div className="skill-category">
            <h3>User-Centric</h3>
            <p>
              Discovery | User Stories | Personas | Journey Maps | Customer
              Feedback
            </p>
          </div>
          <div className="skill-category">
            <h3>AI & Automation</h3>
            <p>
              Generative AI | Prompt Engineering | Machine Learning | Data
              Mapping Automation
            </p>
          </div>
          <div className="skill-category">
            <h3>Search & Discovery</h3>
            <p>
              Global SaaS Search | Query Segmentation | Cross-Tenant
              Elasticsearch | Search UI Patterns
            </p>
          </div>
          <div className="skill-category">
            <h3>Technical Fluency</h3>
            <p>APIs | SQL/NoSQL | HTML/CSS | JavaScript | Tech Specs</p>
          </div>
          <div className="skill-category">
            <h3>Collaboration & Growth</h3>
            <p>
              Technical Sales Strategy | Presentations | Stakeholder Buy-In |
              Executive Influence
            </p>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>EDUCATION</h2>
        <div className="education-item">
          <div className="education-header">
            <img
              src="/assets/udel.png"
              alt="University of Delaware Logo"
              className="education-logo"
            />
            <div>
              <h3>
                Bachelor of Science (B.S.) in Business Management, Sport
                Management, and Interactive Media
              </h3>
              <p>University of Delaware | Newark, DE</p>
            </div>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>CERTIFICATIONS AND ADDITIONAL TRAINING</h2>
        <div className="education-item">
          <div className="education-header">
            <img
              src="/assets/columbia.png"
              alt="Columbia University Logo"
              className="education-logo"
            />
            <div>
              <p>
                Full Stack Software Development Boot Camp | Columbia University
                | New York, NY | 2024 – 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;

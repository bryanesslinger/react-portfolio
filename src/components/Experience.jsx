import React from 'react';

const Experience = () => {
  const tools = [
    {
      category: 'Project Management',
      items: [
        { name: 'JIRA', icon: '/assets/jira-icon.png', description: 'Project management tool for agile teams.' },
        { name: 'Asana', icon: '/assets/asana-icon.png', description: 'Task management and collaboration tool.' },
        { name: 'Trello', icon: '/assets/trello-icon.png', description: 'Collaborative task and project management tool.' },
        { name: 'Notion', icon: '/assets/notion-icon.png', description: 'Connected workspace for wiki, docs & projects' },
      ]
    },
    {
      category: 'Design & Prototyping',
      items: [
        { name: 'Figma', icon: '/assets/figma-icon.png', description: 'Collaborative interface design tool.' },
        { name: 'Invision', icon: '/assets/invision-icon.png', description: 'Design collaboration and prototyping platform.' },
        { name: 'Miro', icon: '/assets/miro-icon.png', description: 'Online collaboration and brainstorming tool.' },
      ]
    },
    {
      category: 'Analytics & Testing',
      items: [
        { name: 'Heap', icon: '/assets/heap-icon.png', description: 'Product analytics platform.' },
        { name: 'UserTesting', icon: '/assets/usertesting-icon.png', description: 'User experience testing platform.' },
        { name: 'Google Analytics', icon: '/assets/ga-icon.png', description: 'Web analytics service.' },
        { name: 'Pendo', icon: '/assets/pendo-icon.png', description: 'Product analytics and user feedback platform.' },
      ]
    },
    {
      category: 'Native Apps',
      items: [
        { name: 'Apple App Store Connect', icon: '/assets/apple-app-store-connect-icon.png', description: 'Platform to manage apps on the App Store.' },
        { name: 'Google Play Console', icon: '/assets/google-play-console-icon.png', description: 'Manage apps on Google Play Store.' },
        { name: 'Testflight', icon: '/assets/testflight-icon.png', description: 'Beta testing tool for iOS apps.' },
        { name: 'Firebase', icon: '/assets/firebase-icon.png', description: 'Mobile and web application development platform.' },

      ]
    },
    {
      category: 'Development',
      items: [
        { name: 'Zapier', icon: '/assets/zapier-icon.png', description: 'Automation tool for apps and workflows.' },
        { name: 'Stripe Connect', icon: '/assets/stripe-icon.png', description: 'Stripe API for marketplace payment solutions.' },
        { name: 'CSS', icon: '/assets/css-icon.png', description: 'Stylesheet language used for describing the presentation of a document.' },
        { name: 'HTML', icon: '/assets/html-icon.png', description: 'Markup language for creating web pages.' },
        { name: 'SQL', icon: '/assets/sql-icon.png', description: 'Language for managing and querying relational databases.' },
        { name: 'Javascript', icon: '/assets/javascript-icon.png', description: 'Programming language used to create interactive effects in web browsers.' },
        { name: 'Storybook', icon: '/assets/storybook-icon.png', description: 'UI component workshop for building and testing components in isolation.' },
        { name: 'Git', icon: '/assets/git-icon.png', description: 'Distributed version control system for tracking changes in source code.' },
        { name: 'GitHub', icon: '/assets/github-icon.png', description: 'Web-based platform for version control and collaboration.' },
        { name: 'GitLab', icon: '/assets/gitlab-icon.png', description: 'Web-based DevOps lifecycle tool for Git repositories.' },
        { name: 'Typescript', icon: '/assets/typescript-icon.png', description: 'Superset of JavaScript with static typing.' },
        { name: 'PostgreSQL', icon: '/assets/postgresql-icon.png', description: 'Open-source relational database management system.' },
        { name: 'Node.js', icon: '/assets/nodejs-icon.png', description: 'JavaScript runtime environment for building server-side applications.' },
        { name: 'React', icon: '/assets/react-icon.png', description: 'JavaScript library for building user interfaces.' },
        { name: 'Visual Studio Code', icon: '/assets/vscode-icon.png', description: 'Code editor with rich features for development.' },
        { name: 'Postman', icon: '/assets/postman-icon.png', description: 'API testing and development tool.' },
        { name: 'MongoDB', icon: '/assets/mongodb-icon.png', description: 'NoSQL database for scalable, flexible data storage.' },
        { name: 'Mongoose', icon: '/assets/mongoose-icon.png', description: 'ODM library for MongoDB and Node.js for data modeling.' },
        { name: 'Apollo', icon: '/assets/apollo-icon.png', description: 'State management library for GraphQL data.' },
        { name: 'GraphQL', icon: '/assets/graphql-icon.png', description: 'Query language for APIs with flexible data fetching.' },      
        { name: 'Bootstrap', icon: '/assets/bootstrap-icon.png', description: 'Front-end framework for building responsive web designs.' },
        { name: 'Tailwind', icon: '/assets/tailwind-icon.png', description: 'Utility-first CSS framework for custom designs.' },
        { name: 'WordPress', icon: '/assets/wordpress-icon.png', description: 'Content management system (CMS) for building websites.' },
        { name: 'OpenAPI', icon: '/assets/openapi-icon.png', description: 'Specification for describing RESTful APIs.' },
        { name: 'Google Cloud Platform', icon: '/assets/google-cloud-icon.png', description: 'Cloud computing services from Google.' },
        { name: 'Launch Darkly', icon: '/assets/launch-darkly-icon.png', description: 'Feature flag management platform.' },


      ]
    },
    {
      category: 'Business & Sales',
      items: [
        { name: 'Salesforce', icon: '/assets/salesforce-icon.png', description: 'Customer relationship management (CRM) platform.' },
        { name: 'Tableau', icon: '/assets/tableau-icon.png', description: 'Data visualization software.' },
        { name: 'Jellyfish', icon: '/assets/jellyfish-icon.png', description: 'Business intelligence and decision-making software.' },
        { name: 'Stripe', icon: '/assets/stripe-icon.png', description: 'Online payment processing for businesses.' },
        { name: 'Sendgrid', icon: '/assets/sendgrid-icon.png', description: 'Email API for sending transactional and marketing emails.' },
        { name: 'Twilio', icon: '/assets/twilio-icon.png', description: 'Cloud communications platform for SMS, voice, and video.' },

      ]
    },
  ];

  return (
    <div className="experience-container">
      {tools.map((category, index) => (
        <div key={index} className="tool-category">
          <h3>{category.category}</h3>
          <div className="tool-grid">
            {category.items
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((tool, index) => (
                <div key={index} className="tool-card">
                  <img src={tool.icon} alt={tool.name} className="tool-icon" />
                  <h4>{tool.name}</h4>
                  <p>{tool.description}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
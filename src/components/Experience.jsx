import React from 'react';

const Experience = () => {
  const tools = [
    {
      category: 'AI Tools',
      items: [
        { name: 'Cursor', icon: '/assets/cursor.png' },
        { name: 'Claude', icon: '/assets/claude.png' },
        { name: 'Gemini', icon: '/assets/gemini.png' },
        { name: 'Perplexity', icon: '/assets/perplexity.png' },
      ]
    },
    {
      category: 'Project Management',
      items: [
        { name: 'JIRA', icon: '/assets/jira-icon.png' },
        { name: 'Asana', icon: '/assets/asana-icon.png' },
        { name: 'Trello', icon: '/assets/trello-icon.png' },
        { name: 'Notion', icon: '/assets/notion-icon.png' },
      ]
    },
    {
      category: 'Analytics & Testing',
      items: [
        { name: 'Heap', icon: '/assets/heap-icon.png' },
        { name: 'UserTesting', icon: '/assets/usertesting-icon.png' },
        { name: 'Google Analytics', icon: '/assets/ga-icon.png' },
        { name: 'Pendo', icon: '/assets/pendo-icon.png' },
        { name: 'Launch Darkly', icon: '/assets/launch-darkly-icon.png' },
      ]
    },
    {
      category: 'Design & Prototyping',
      items: [
        { name: 'Figma', icon: '/assets/figma-icon.png' },
        { name: 'Invision', icon: '/assets/invision-icon.png' },
        { name: 'Miro', icon: '/assets/miro-icon.png' },
      ]
    },
    {
      category: 'Business & Sales',
      items: [
        { name: 'Salesforce', icon: '/assets/salesforce-icon.png' },
        { name: 'Tableau', icon: '/assets/tableau-icon.png' },
        { name: 'Jellyfish', icon: '/assets/jellyfish-icon.png' },
        { name: 'Stripe', icon: '/assets/stripe-icon.png' },
        { name: 'Stripe Connect', icon: '/assets/stripe-connect-icon.png' },
        { name: 'Sendgrid', icon: '/assets/sendgrid-icon.png' },
        { name: 'Twilio', icon: '/assets/twilio-icon.png' },
        { name: 'Zapier', icon: '/assets/zapier-icon.png' },
      ]
    },
    {
      category: 'Native Apps',
      items: [
        { name: 'Apple App Store Connect', icon: '/assets/apple-app-store-connect-icon.png' },
        { name: 'Google Play Console', icon: '/assets/google-play-console-icon.png' },
        { name: 'Testflight', icon: '/assets/testflight-icon.png' },
        { name: 'Firebase', icon: '/assets/firebase-icon.png' },
      ]
    },
    {
      category: 'Development',
      items: [
        { name: 'CSS', icon: '/assets/css-icon.png' },
        { name: 'HTML', icon: '/assets/html-icon.png' },
        { name: 'SQL', icon: '/assets/sql-icon.png' },
        { name: 'Javascript', icon: '/assets/javascript-icon.png' },
        { name: 'Storybook', icon: '/assets/storybook-icon.png' },
        { name: 'Git', icon: '/assets/git-icon.png' },
        { name: 'GitHub', icon: '/assets/github-icon.png' },
        { name: 'GitLab', icon: '/assets/gitlab-icon.png' },
        { name: 'Typescript', icon: '/assets/typescript-icon.png' },
        { name: 'PostgreSQL', icon: '/assets/postgresql-icon.png' },
        { name: 'Node.js', icon: '/assets/nodejs-icon.png' },
        { name: 'React', icon: '/assets/react-icon.png' },
        { name: 'Visual Studio Code', icon: '/assets/vscode-icon.png' },
        { name: 'Postman', icon: '/assets/postman-icon.png' },
        { name: 'MongoDB', icon: '/assets/mongodb-icon.png' },
        { name: 'Mongoose', icon: '/assets/mongoose-icon.png' },
        { name: 'Apollo', icon: '/assets/apollo-icon.png' },
        { name: 'GraphQL', icon: '/assets/graphql-icon.png' },
        { name: 'Bootstrap', icon: '/assets/bootstrap-icon.png' },
        { name: 'Tailwind', icon: '/assets/tailwind-icon.png' },
        { name: 'WordPress', icon: '/assets/wordpress-icon.png' },
        { name: 'OpenAPI', icon: '/assets/openapi-icon.png' },
        { name: 'Google Cloud Platform', icon: '/assets/google-cloud-icon.png' },
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
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
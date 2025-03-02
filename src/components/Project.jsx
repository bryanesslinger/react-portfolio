import React from 'react';

const Project = ({ title, description, imageUrl, linkUrl }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      {linkUrl ? (
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt={title} />
        </a>
      ) : (
        <img src={imageUrl} alt={title} />
      )}
      <p>{description}</p>
    </div>
  );
};

export default Project;
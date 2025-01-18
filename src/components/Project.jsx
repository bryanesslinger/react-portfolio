import React from 'react';

const Project = ({ title, description, imageUrl }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
    </div>
  );
};

export default Project;
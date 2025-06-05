import React from 'react';

const Resume = () => {
  return (
    <>
      <a
        href="/assets/Bryan_Esslinger_Resume.pdf"
        download="Bryan_Esslinger_Resume.pdf"
        className="download-button"
      >
        Download PDF
      </a>
      <iframe
        src="/assets/Bryan_Esslinger_Resume.pdf"
        width="100%"
        height="2000px"
        style={{ border: 'none' }}
      />
    </>
  );
};

export default Resume; 
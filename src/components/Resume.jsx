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
      <object
        data="/assets/Bryan_Esslinger_Resume.pdf"
        type="application/pdf"
        width="100%"
        height="1000px"
      >
      </object>
    </>
  );
};

export default Resume; 
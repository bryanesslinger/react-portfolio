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
      <div className="pdf-viewer">
        <iframe
          src="/assets/Bryan_Esslinger_Resume.pdf"
          width="100%"
          height="1000px"
          style={{ border: 'none' }}
          title="Resume PDF"
        />
      </div>
    </>
  );
};

export default Resume; 
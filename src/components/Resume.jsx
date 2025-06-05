import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up the worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

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
        <Document
          file="/assets/Bryan_Esslinger_Resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div>Loading PDF...</div>}
          error={<div>Error loading PDF!</div>}
        >
          <Page
            pageNumber={pageNumber}
            width={window.innerWidth > 768 ? 800 : window.innerWidth - 40}
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>
        {numPages > 1 && (
          <div className="pdf-controls">
            <button
              onClick={() => setPageNumber(page => Math.max(page - 1, 1))}
              disabled={pageNumber <= 1}
            >
              Previous
            </button>
            <span>
              Page {pageNumber} of {numPages}
            </span>
            <button
              onClick={() => setPageNumber(page => Math.min(page + 1, numPages))}
              disabled={pageNumber >= numPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume; 
// src/FlipBook.js
import React, { useEffect, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { pdfjs,Document, Page } from 'react-pdf';
import './FlipBook.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const FlipBook = ({ pdfPath, totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (e) => {
    setCurrentPage(e.data);
  };
  


  return (
    <div className="flip-book-container">
      <HTMLFlipBook
        width={600}
        height={800}
        showCover
        flipOnTouch
        flipOnWheel
        onPageChange={(e) => handlePageChange(e)} >

        {[...Array(totalPages).keys()].map((pageNumber) => (
          <div key={pageNumber} className="page">
            <Document file={pdfPath} error={<div>Error loading PDF</div>}>
              <Page pageNumber={pageNumber + 1} />
            </Document>
          </div>
        ))}

      </HTMLFlipBook>
    </div>
  );
};

export default FlipBook;

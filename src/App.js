// src/App.js
import React from 'react';
import pdf from './Book 7_TCD_AK_LP_WS.pdf';
import FlipBook from './FlipBook';
import './App.css'


function App() {
  // const pdfPath = './Book 7_TCD_AK_LP_WS.pdf'; // Replace with your actual PDF file path
  const totalPages = 10; // Replace with the total number of pages in your PDF

  return (
    <div className="App" >
      <header className="App-header">
        <h1>Sample FlipBook</h1>
      </header>
      <main>
        <FlipBook pdfPath={pdf} totalPages={totalPages} />
      </main>
    </div>
  );
}

export default App;

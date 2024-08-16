// src/components/Results.js
import React from 'react';

const Results = ({ data }) => {
  return (
    <div>
      {data && data.map((item, index) => (
        <div key={index}>
          {/* Render item details */}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;

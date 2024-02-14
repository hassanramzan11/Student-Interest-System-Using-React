// DistinctInterestsList.jsx

import React from "react";

const DistinctInterestsList = ({ distinctInterests }) => {
  const numberOfInterests = distinctInterests.length;

  return (
    <div className="distinct-interests">
      <h2>Total Distinct Interests</h2>
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          margin: '10px',
          borderRadius: '10px',
          fontSize: '10em',  // Adjust the font size as needed
          textAlign: 'center',
        }}
      >
        {numberOfInterests}
      </div>
    </div>
  );
};

export default DistinctInterestsList;

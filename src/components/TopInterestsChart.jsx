import React from 'react';

const TopInterestsChart = ({ top5Interests, bottom5Interests }) => (
  <div>
    <h2>Top 5 Interests</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {top5Interests.map((interest, index) => (
        <div
          key={index}
          style={{
            backgroundColor: 'green',
            padding: '7px',
            margin: '5px',
            borderRadius: '5px',
          }}
        >
          {interest}
        </div>
      ))}
    </div>

    <h2>Bottom 5 Interests</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {bottom5Interests.map((interest, index) => (
        <div
          key={index}
          style={{
            backgroundColor: 'red',
            padding: '7px',
            margin: '5px',
            borderRadius: '5px',
          }}
        >
          {interest}
        </div>
      ))}
    </div>
  </div>
);

export default TopInterestsChart;

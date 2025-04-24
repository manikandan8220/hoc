import React from 'react';

function ShowCoordinates({ x, y }) {
  return (
    <div style={{ textAlign: 'center'}}>
      <h2>Mouse Position</h2>
      <p>X: {x}</p>
      <p>Y: {y}</p>
    </div>
  );
}

export default ShowCoordinates;
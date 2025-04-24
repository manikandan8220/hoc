import React, { useState } from 'react';

const withClickCounter = (WrappedComponent) => {
  return function (props) {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
      setClickCount(prevCount => prevCount + 1);
    };

    return (
      <div>
        <WrappedComponent {...props} handleClick={handleClick} />
        <p>Button clicked {clickCount} times</p>
      </div>
    );
  };
};

export default withClickCounter;
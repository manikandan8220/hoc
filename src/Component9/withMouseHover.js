import React, { useState } from 'react';

const withMouseHover = (WrappedComponent) => {
  return function MouseHoverComponent(props) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
      <div onMouseMove={handleMouseMove} style={{ height: '100vh' }}>
        <WrappedComponent {...props} x={position.x} y={position.y} />
      </div>
    );
  };
};

export default withMouseHover;
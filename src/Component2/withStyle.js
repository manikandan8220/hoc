import React from 'react';

const withStyle = (WrappedComponent) => {
  return function StyledComponent(props) {
    const style = {
      border: '2px solid #4caf50',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#f0fff0',
      textAlign: 'center',
    };

    return (
      <div style={style}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withStyle;
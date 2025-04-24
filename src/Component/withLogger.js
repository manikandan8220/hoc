import React from 'react';

const withLogger = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    console.log('Component Rendered');
    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
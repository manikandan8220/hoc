import React from 'react';

const withLogger = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    console.log('Component Rendered with props:', props);
    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
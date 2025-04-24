import React from 'react';

const withLoader = (WrappedComponent) => {
  return function LoaderComponent(props) {
    if (props.loading) {
      return <p>Loading...</p>; 
    }
    return <WrappedComponent {...props} />;
  };
};

export default withLoader;
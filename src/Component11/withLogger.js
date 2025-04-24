import React, { useEffect } from 'react';

const withLogger = (Component) => {
  return function WrappedWithLogger(props) {
    useEffect(() => {
      console.log(`${Component.name} rendered`);
    }, []);

    return <Component {...props} />;
  };
};

export default withLogger;
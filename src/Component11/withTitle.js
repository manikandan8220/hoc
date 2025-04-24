import React, { useEffect } from 'react';

const withTitle = (Component) => {
  return function WrappedWithTitle(props) {
    useEffect(() => {
      document.title = Component.name;
    }, []);

    return <Component {...props} />;
  };
};

export default withTitle;
import React from 'react';

const withConditionalRender = (WrappedComponent) => {
  return function (props) {
    return props.show ? <WrappedComponent {...props} /> : null;
  };
};

export default withConditionalRender;
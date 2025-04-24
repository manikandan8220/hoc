import React from 'react';

const withConditionalRender = (WrappedComponent) => {
  return function ConditionalComponent(props) {
    if (!props.isVisible) {
      return <p>Component is hidden.</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withConditionalRender;
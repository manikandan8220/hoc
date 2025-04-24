import React from 'react';

const withAuth = (WrappedComponent) => {
  return function AuthenticatedComponent(props) {
    if (!props.isAuthenticated) {
      return <p>Please log in to access this content.</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
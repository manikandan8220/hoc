import React from 'react';

const withAuth = (Component) => {
  return function AuthWrapper(props) {
    const isAuthenticated = props.isAuthenticated; 

    if (!isAuthenticated) {
      return <h2>Access Denied</h2>;
    }

    return <Component {...props} />;
  };
};

export default withAuth;
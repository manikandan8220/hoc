import React from 'react';

function Users({ data, loading }) {
  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
export default Users;
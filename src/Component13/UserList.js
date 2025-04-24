import React from 'react';

function UserList({ data }) {
  return (
    <div>
      <h3>Users:</h3>
      <ul>
        {data.map(user => 
        <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default UserList;
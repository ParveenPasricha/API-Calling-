import React, { useState } from 'react';

function User() {
  const [Users, setUsers] = useState('');

  function userChange() {
    const name = prompt("Enter your Name");
    if (name) {
      setUsers(name);
    }
  }

  return (
    <div>
      <h1 className="text-center font-serif text-orange-700 text-2xl">Welcome {Users}</h1>
      <button onClick={userChange}>Change Username</button>
    </div>
  );
}

export default User;

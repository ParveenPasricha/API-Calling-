import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Movement() {
  const [users, setUsers] = useState([]); // Changed to use an array.

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      setUsers(data); // Set users data.
    };
    fetchData();
  }, []);

  return (
    <>
    <h1>Welcome</h1>
      <div className='bg-blue-600 font-semibold p-4 flex'>
        <div className='text-left'>
          <h1>Portfolio</h1>
        </div>
        <div>
          <Link className='m-6 hover:bg-black hover:text-white p-4' to="/">Home</Link>
          <Link className='m-6 hover:bg-black hover:text-white p-4' to="/contact">Contact</Link>
          <Link className='m-6 hover:bg-black hover:text-white p-4' to="/movement">Movement</Link>
          <Link className='m-6 hover:bg-black hover:text-white p-4' to="/qualification">Qualification</Link>
        </div>
      </div>
      <div className=''>
        {users.map((user) => ( // Changed to users.
          <div key={user.id}>
            <div className='flex'>
              <img className='w-44 h-44' src={user.avatar_url} alt={`Avatar of ${user.login}`} /> {/* Updated alt text. */}
              <p className='m-24'>{user.login}</p>
              </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Movement;

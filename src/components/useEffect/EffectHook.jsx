import React, { useState, useEffect, useRef } from 'react';

function UserSearch() {
  // State to hold the search input and the user results
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Ref to the input element so we can focus it
  const inputRef = useRef();

  // Focus the input on component mount
  useEffect(() => {
    inputRef.current.focus();
  }, []); // runs only once after the component mounts

  // Fetch users whenever the query changes
  useEffect(() => {
    // Skip if the query is empty
    if (query.trim() === '') {
      setUsers([]);
      return;
    }

    // Setup for loading and cancel control
    let ignore = false;
    setLoading(true);
    setError(null);

    // Simulate a fake API call
    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        if (!ignore) setUsers(data);
      })
      .catch(err => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    // Cleanup in case the component unmounts or query changes too fast
    return () => {
      ignore = true;
    };
  }, [query]);

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
      <h1>User Search</h1>

      {/* Input with auto-focus */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '0.5rem', width: '300px' }}
      />

      {/* Loading / error state */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {/* Render results */}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserSearch;

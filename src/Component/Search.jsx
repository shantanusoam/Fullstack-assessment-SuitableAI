import React, { useState, useEffect } from 'react';

const data = [
  {
    id: 0,
    employeeName: 'Anmol Mahajan',
    post: 'Sr.Engineer',
    userPic: 'Men',
    Stage: 'Joined',
    daysRemaining: 20,
    reward: 200,
    fulfilled: false,
    userExists: true,
  },
  // ... more data
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const results = data.filter((item) =>
      item.employeeName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(results);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.employeeName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

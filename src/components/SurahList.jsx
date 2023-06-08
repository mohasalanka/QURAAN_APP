import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SurahList() {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/surahs')
      .then(response => response.json())
      .then(data => setSurahs(data))
      .catch(error => console.error('Error fetching surahs:', error));
  }, []);

  return (
    <div>
      <h2>Surah List</h2>
      <ul>
        {surahs.map(surah => (
          <li key={surah.id}>
            <Link to={`/surah/${surah.id}`}>{surah.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SurahList;

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

  const handleDelete = (id) => {
    fetch(`http://localhost:9292/surahs/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        console.log(`Surah ${id} deleted`);
        // Update the surahs list by removing the deleted surah
        const updatedSurahs = surahs.filter(surah => surah.id !== id);
        setSurahs(updatedSurahs);
      })
      .catch(error => console.error(`Error deleting surah ${id}:`, error));
  };

  return (
    <div>
      <h2>Surah List</h2>
      <ul className='surahs-card-list'>
        {surahs.map(surah => (
          <li className='card' key={surah.id}>
            <Link to={`/surah/${surah.id}`}>{surah.name}</Link>
            <button onClick={() => handleDelete(surah.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SurahList;

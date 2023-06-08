import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SurahDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [surah, setSurah] = useState(null);
  const [name, setName] = useState('');
  const [verseCount, setVerseCount] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/surahs/${id}`)
      .then(response => response.json())
      .then(data => {
        setSurah(data);
        setName(data.name);
        setVerseCount(data.verseCount);
        console.log(data);
      })
      .catch(error => console.error(`Error fetching surah ${id} details:`, error));
  }, [id]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleVerseCountChange = (event) => {
    setVerseCount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameInput = event.target[0].value;
    const verseInput = event.target[1].value;

    setData([...data, [nameInput, verseInput]]);

    const updatedSurah = {
      name: name,
      verseCount: verseCount
    };

    fetch(`http://localhost:9292/surahs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedSurah)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Surah updated:', data);
        setSurah(data);
      })
      .catch(error => console.error(`Error updating surah ${id}:`, error));
  };

  const handleDelete = () => {
    fetch(`http://localhost:9292/surahs/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        console.log(`Surah ${id} deleted`);
        // Redirect to the surah list page
        navigate('/surahs');
      })
      .catch(error => console.error(`Error deleting surah ${id}:`, error));
  };

  return (
    <div>
      <h2>{name}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="verseCount">Verse Count:</label>
          <input type="number" id="verseCount" value={verseCount} onChange={handleVerseCountChange} />
        </div>
        <button type="submit">Update</button>
      </form>

      <h3>Additional Surah Details:</h3>
      {data.length > 0 ? (
        <ul>
          {data.map((entry, index) => (
            <li key={index}>
              Name: {entry[0]}, Verse: {entry[1]}
            </li>
          ))}
        </ul>
      ) : (
        <p>No additional details yet.</p>
      )}

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default SurahDetails;

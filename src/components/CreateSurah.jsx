import React, { useState } from 'react';

function CreateSurah() {
  const [name, setName] = useState('');
  const [verseCount, setVerseCount] = useState('');
  const [data, setData] = useState([]);

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

    const newSurah = {
      name: name,
      verseCount: verseCount
    };

    fetch('http://localhost:9292/surahs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSurah)
    })
      .then(response => response.json())
      .then(data => {
        console.log('New surah created:', data);
        setName('');
        setVerseCount('');
      })
      .catch(error => console.error('Error creating surah:', error));
  };

  const singleDel = (value) => {
    const newData = data.filter(item => item !== value);
    setData(newData);
  };

  return (
    <div className='create-surah'>
      <h2>Create Surah</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="verseCount">Verse Count:</label>
          <input type="number" value={verseCount} onChange={handleVerseCountChange} />
        </div>
        <button type="submit">Create</button>
      </form>

      <h3>Additional Surah created:</h3>
      {data.length > 0 ? (
        <ul className='surahs-card-create'>
          {data.map((entry, index) => (
            <li  key={index}>
              Name: {entry[0]}, Verse: {entry[1]}
              <button key={index} onClick={() => singleDel(entry)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p >No additional details yet.</p>
      )}
    </div>
  );
}

export default CreateSurah;

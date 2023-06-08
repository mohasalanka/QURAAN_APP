import { useState } from 'react';


function CreateSurah() {
  const [name, setName] = useState('');
  const [verseCount, setVerseCount] = useState('');
  const history = useHistory();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleVerseCountChange = (event) => {
    setVerseCount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
        // Reset the form fields
        setName('');
        setVerseCount('');
        // Redirect to the surah list page
        history.push('/surahs');
      })
      .catch(error => console.error('Error creating surah:', error));
  };

  return (
    <div>
      <h2>Create Surah</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="verseCount">Verse Count:</label>
          <input type="number" id="verseCount" value={verseCount} onChange={handleVerseCountChange} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateSurah;

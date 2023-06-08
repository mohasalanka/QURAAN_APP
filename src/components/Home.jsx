import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Home() {
  const [verses, setVerses] = useState([]);

  useEffect(() => {
    const fetchVerses = async () => {
      try {
        const response = await fetch('http://localhost:9292/surahs');
        const data = await response.json();
        setVerses(data);
      } catch (error) {
        console.error('Error fetching verses:', error);
      }
    };

    fetchVerses();
  }, []);

  return (
    <div className="container">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/surahs">surahs</Link>
        <Link to="/surahs/create">Create surah</Link>
        <Link to="/surahs/details">Surah Details</Link>
      </nav>
      <h2 className="title-h2">Quranic Verses App</h2>
      <h3>Discover the Beauty of the Quran</h3>

      <button className="button">Get Started</button>
      <button className="button">Learn More</button>

      <img className="firstphoto" src="https://static.vecteezy.com/system/resources/previews/005/714/610/original/quranic-verses-that-are-read-isolated-on-white-background-free-photo.jpg" alt="" />

      <h4 className="benefits">Benefits of Quranic Verses App:</h4>
      <div className="benefits">
        <ul >
          <li>Explore and contemplate on Quranic verses</li>
          <li>Create your own collection of favorite verses</li>
          <li>Access translations and interpretations</li>
        </ul>
      </div>

      <h4 className="features">Key Features:</h4>
      <ul className="features">
        <li>Search and browse through Quranic surahs</li>
        <li>Read translations and interpretations</li>
        <li>Create a personal collection of favorite verses</li>
      </ul>

      <h4 className="resources">Resources:</h4>
      <ul className="resources">
        <li>Quranic translations and tafsir</li>
        <li>Articles and blog posts on Quranic topics</li>
        <li>Community forum for discussions</li>
      </ul>

      <h4 className="success-indicators">Success Indicators:</h4>
      <ul className="success-indicators">
        <li>Over 100,000 happy users</li>
        <li>Rated 4.5 stars on app stores</li>
        <li>Featured in prominent Islamic publications</li>
      </ul>

      <p>Join thousands of users who have found inspiration and guidance in the Quran through our app.</p>

      <p>Sign up to receive our exclusive content offer:</p>
      <input type="email" placeholder="Enter your email" className="button" />
      <button className="button">Subscribe</button>

      <p>Don't miss out! Start your Quranic journey today.</p>
      <button className="button">Get Started</button>

    </div>
  );
}

export default Home;







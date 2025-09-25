import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const profanityWrapper = (fact) => {
  const intros = [
    "Woahhh, did you know",
    "No wayyyy",
    "Wowww, check this out",
    "This one's super wild",
    "Man, listen to this:"
  ];
  const outro = "— wild, huh?";
  const intro = intros[Math.floor(Math.random() * intros.length)];
  return `${intro} ${fact} ${outro}`;
};

function App() {
  const [fact, setFact] = useState('');

  const fetchFact = async () => {
    try {
      const res = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en');
      const dirtyFact = profanityWrapper(res.data.text);
      setFact(dirtyFact);
    } catch (err) {
      setFact("Dang! Couldn't fetch a fact.");
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="app-container">
      <div className="fact-box">
        <h1>🔥 Random Fact 🔥</h1>
        <p>{fact}</p>
        <button onClick={fetchFact}>Another one</button>
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';

function App() {
  // Move cards state here so it becomes global for all pages
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem('devconnect-cards');
    return saved ? JSON.parse(saved) : [
      { title: 'Create a Team', description: 'Work together on cool ideas.' },
      { title: 'Manage Tasks', description: 'Stay on top of deadlines.' }
    ];
  });

  // Save cards to localStorage when they change
  useEffect(() => {
    localStorage.setItem('devconnect-cards', JSON.stringify(cards));
  }, [cards]);

  return (
    <div>
      <Header />
      <Routes>
        {/* Pass cards and setCards as props to Home */}
        <Route path="/" element={<Home cards={cards} setCards={setCards} />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features cards={cards} />} />
      </Routes>
    </div>
  );
}

export default App;
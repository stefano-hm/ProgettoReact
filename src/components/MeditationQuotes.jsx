import { useState, useEffect } from 'react';
import '../styles/MeditationQuotes.css';

const quotes = [
  "“Meditation is not an escape from reality, it is a way of truly entering it.” – Thich Nhat Hanh",
  "“The mind is everything. What you think you become.” – Buddha",
  "“Meditation brings wisdom; lack of meditation leaves ignorance.” – Buddha",
  "“Quiet the mind, and the soul will speak.” – Ma Jaya Sati Bhagavati",
];

export default function MeditationQuotes() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % quotes.length;
        setCurrentQuote(quotes[nextIndex]);
        return nextIndex;
      });
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="meditation-quotes-container">
      <blockquote>{currentQuote}</blockquote>
    </div>
  );
}


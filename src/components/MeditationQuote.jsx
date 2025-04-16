import '../styles/MeditationQuote.css'

export default function MeditationQuote() {
  return (
    <div className="quote-container">
      <img
        src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
        alt="Meditazione"
        className="quote-image"
      />
      <blockquote>
        “Meditation is not an escape from reality, it is a way of truly entering it.”  
        <span>– Thich Nhat Hanh</span>
      </blockquote>
    </div>
  )
}

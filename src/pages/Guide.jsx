import '../styles/Guide.css'
import BackgroundImage from '../components/BackgroundImage'

export default function Guide() {
    return (
      <>
        <div className="guide-container">
          <h1>Meditation Guide</h1>
  
          <section>
            <h2>Why Meditate</h2>
            <p>
              Meditation is a powerful tool to enhance awareness, reduce stress, and cultivate mental well-being. Even a few minutes a day can make a real difference.
            </p>
          </section>
  
          <section>
            <h2>How to Start</h2>
            <p>
              Find a quiet place, sit in a comfortable position, and set a timer. Breathe deeply, close your eyes, and bring your attention to your breath. If your mind wanders, gently guide it back to the present moment.
            </p>
          </section>
  
          <section>
            <h2>Common Techniques</h2>
            <ul>
              <li><strong>Mindful breathing</strong>: focus on the rhythm of your breath.</li>
              <li><strong>Body scan</strong>: observe physical sensations throughout your body.</li>
              <li><strong>Walking meditation</strong>: walk slowly, paying attention to each movement.</li>
              <li><strong>Mantra</strong>: silently repeat a word or phrase to maintain focus.</li>
            </ul>
          </section>
  
          <section>
            <h2>Helpful Tips</h2>
            <p>
              You don't need to be perfect: practice is more important than the outcome. Meditate regularly, even if just for 5 minutes. Welcome every experience without judging it.
            </p>
          </section>
        </div>
        <BackgroundImage />
      </>
    )
  }
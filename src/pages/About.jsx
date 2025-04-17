import '../styles/About.css'
import BackgroundImage from '../components/BackgroundImage'


export default function About() {
  return (
    <>
    <div className="about-container">
      <section>
        <h1>The Experience</h1>
        <p>
          <strong>Lotus Flow</strong> is a simple app designed to help you find a moment of calm amidst the hustle and bustle of your day.<br />
          With a clean, distraction-free interface, it invites you to slow down, breathe, and reconnect with yourself.<br />
          Whether you have just a few minutes or want to dedicate more time to your practice, the app accompanies you with simplicity and presence.<br />
          The goal is to provide a calm, accessible, and authentic digital space, where silence is not absence, but a possibility.
        </p>
      </section>

      <section>
        <h1>Why Lotus Flow</h1>
        <p>
          This project started as part of a web development course, but also from a personal need: to create something that could have a positive impact, no matter how small, on people's lives.<br />
          Meditation is a powerful tool, and the idea behind Lotus Flow is just that: to offer a simple, thoughtful, and welcoming space that encourages taking time for yourself.<br />
          It’s also a way for me to express, through code and design, what I truly care about: technology serving well-being.
        </p>
      </section>
      
      <p className="signature">✨ Breathe. Live. Slow down. ✨</p>
    </div>
    <BackgroundImage />
    </>
  )
}

  
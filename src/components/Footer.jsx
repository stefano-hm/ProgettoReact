import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Lotus Flow - Meditation App 
      </p>
    </footer>
  )
}

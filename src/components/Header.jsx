import { Link } from 'react-router-dom'
import '../styles/Header.css'
import '../styles/Logo.css'


export default function Header() {
    return (
      <nav className="nav">
        <div className="nav-logo">
          <img src="/images/logo.PNG" alt="Logo Medita" className="nav-logo-img" />
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/guide">Guide</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    )
  }

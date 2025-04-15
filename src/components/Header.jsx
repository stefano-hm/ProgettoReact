import { Link } from 'react-router-dom'
import '../styles/Header.css'


export default function Header() {
    return (
      <nav className="nav">
        <div className="nav-logo">🧘 Medita</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/guide">Guide</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    )
  }

import { Link } from 'react-router-dom'
import '../styles/Header.scss'
import headerLogo from '../assets/logo-kasa.png'

const Header = () => {
    return  <nav>
                <img src={headerLogo} alt="logo Kasa" />
                <ul>
                    <Link to="/" className="nav-link">Accueil</Link>
                    <Link to="/about" className="nav-link">À propos</Link>
                </ul>
            </nav>
}

export default Header
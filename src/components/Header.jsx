import { Link } from 'react-router-dom'
import '../styles/Header.scss'

const Header = () => {
    return  <nav>
                <img src="./src/assets/logo-kasa.png" alt="logo Kasa" />
                <ul>
                    <Link to="/" className="nav-link">Accueil</Link>
                    <Link to="/about" className="nav-link">À propos</Link>
                </ul>
            </nav>
}

export default Header
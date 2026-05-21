import { NavLink } from 'react-router-dom'
import '../styles/Header.scss'
import headerLogo from '../assets/logo-kasa.png'

const Header = () => {
    return  <nav>
                <img className='header-logo' src={headerLogo} alt="logo Kasa" />
                <ul>
                    <NavLink to="/" className="nav-link">Accueil</NavLink>
                    <NavLink to="/about" className="nav-link">À propos</NavLink>
                </ul>
            </nav>
}

export default Header
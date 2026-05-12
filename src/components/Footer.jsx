import '../styles/Footer.scss'
import footerLogo from '../assets/logo-footer-kasa.png'

const Footer = () => {
    return  <footer>
                <img src={footerLogo} alt="logo Kasa" />
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
}

export default Footer
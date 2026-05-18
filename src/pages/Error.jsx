import { Link } from "react-router-dom"
import '../styles/Error.scss'

const Error = () => {
  return (
      <div className="error-container">
        <h1 className="error-title">404</h1>
        <h2 className="error-subtitle">Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/" className="error-link">
          Retourner sur la page d'accueil
        </Link>
      </div>
  )
}

export default Error
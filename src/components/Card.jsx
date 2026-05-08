import { Link } from 'react-router-dom'
import '../styles/Card.scss'

const Card = ( {id, cover, title} ) => {
    return (
        <Link to={ `/logement/${id}` }>
            <article className='card'>
                <img src={cover} alt={title} />
                <h2>{title}</h2>
            </article>
        </Link>
    )
}

export default Card
import logements from '../datas/logements.json'
import Card from './Card';
import '../styles/Gallery.scss'

const Gallery = () => {
    return (
        <div className='gallery'>
            {logements.map((logement) => (
                <Card
                    key={logement.id}
                    id={logement.id}
                    title={logement.title}
                    cover={logement.cover}
                />
            ))}
        </div>
    )
}

export default Gallery
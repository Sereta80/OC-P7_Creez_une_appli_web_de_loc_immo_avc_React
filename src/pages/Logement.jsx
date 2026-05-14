import { useParams } from 'react-router-dom'
import logements from '../datas/logements.json'
import Collapse from '../components/Collapse'
import Error from './Error'
import '../styles/Logement.scss'

const Logement = () => {
    const { id } = useParams()
    const logement = logements.find(item => item.id === id)
    const range = [1, 2, 3, 4, 5]

    if(!logement) {
        return (
            <Error />
        )
    }

    return (
        <div className='logement-page'>
            <div className='logement-header'>
                <img src={logement.cover} alt={logement.title} />
            </div>
            <div className='logement-main'>
                <div className='left-column'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <ul className='tags'>
                        {logement.tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className='right-column'>
                    <div className='host'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt={logement.host.name} />
                    </div>
                    <div className='rating'>{logement.rating}</div>
                </div>
            </div>
            <div className='collapses-container'>
                <div className='description'>
                    <Collapse
                        key="description"
                        title='Description'
                        description={logement.description}
                    />
                </div>
                <div className='equipments'>
                    <Collapse
                        key='equipment'
                        title='Équipements'
                        equipments={logement.equipments}
                    />
                </div>
            </div>
        </div>
    )
}

export default Logement
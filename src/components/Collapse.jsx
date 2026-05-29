import { useState } from "react"
import arrow from '../assets/arrow.png'
import '../styles/Collapse.scss'


const Collapse = ({title, description, equipments}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`collapse-${isOpen ? 'opened' : 'closed'}`}>
            <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <img
                    src={arrow}
                    alt="flèche"
                    className={`arrow-${isOpen ? 'down' : 'up'}`}
                />
            </div>
            <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                <div>
                    {description && <p>{description}</p>}
                    <ul className="equipments-list">
                        {equipments && equipments.map((equipment) => (
                            <li key={equipment} className="equipments-item">{equipment}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Collapse
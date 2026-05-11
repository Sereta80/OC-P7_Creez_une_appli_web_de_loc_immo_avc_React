import { useState } from "react"
import arrow from '../assets/arrow.png'
import '../styles/Collapse.scss'


const Collapse = ({id, title, description}) => {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className="collapse-opened">
            <div className="collapse-header">
                <h2>{title}</h2>
                <img
                    src={arrow}
                    alt="Flèche pointant vers le bas"
                    className="arrow-down"
                    onClick={() => setIsOpen(false)}
                />
            </div>
            <div className="collapse-content">
                <p>{description}</p>
            </div>
        </div>
    ) : (
        <div className="collapse-closed">
            <div className="collapse-header">
                <h2>{title}</h2>
                <img
                    src={arrow}
                    alt="Flèche pointant vers le haut"
                    className="arrow-up"
                    onClick={() => setIsOpen(true)}
                />
            </div>
        </div>
    )
}

export default Collapse
import { useState } from "react"
import arrow from '../assets/arrow.png'
import '../styles/Collapse.scss'


const Collapse = ({title, description}) => {
    const [isOpen, setIsOpen] = useState(false)

    // return isOpen ? (
    //     <div className="collapse-opened">
    //         <div className="collapse-header">
    //             <h2>{title}</h2>
    //             <img
    //                 src={arrow}
    //                 alt="Flèche pointant vers le bas"
    //                 className="arrow-down"
    //                 onClick={() => setIsOpen(false)}
    //             />
    //         </div>
    //         <div className="collapse-content">
    //             <p>{description}</p>
    //         </div>
    //     </div>
    // ) : (
    //     <div className="collapse-closed">
    //         <div className="collapse-header">
    //             <h2>{title}</h2>
    //             <img
    //                 src={arrow}
    //                 alt="Flèche pointant vers le haut"
    //                 className="arrow-up"
    //                 onClick={() => setIsOpen(true)}
    //             />
    //         </div>
    //     </div>
    // )

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
            {isOpen && (
                <div className="collapse-content">
                    <p>{description}</p>
                </div>
            )}
        </div>
    )
}

export default Collapse
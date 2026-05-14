import { useState } from 'react'
import backArrow from '../assets/back-arrow.png'
import nextArrow from '../assets/next-arrow.png'

const Slideshow = ({pictures}) => {
    const [slide, updateSlide] = useState(0)
    return (
        <div className='slideshow'>
            <img src={backArrow} alt="Précédent" />
            <img src={pictures[slide]} alt={`Photo ${slide + 1}`} />
            <img src={nextArrow} alt="Suivant" />
        </div>
    )
}

export default Slideshow
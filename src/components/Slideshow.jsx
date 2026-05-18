import { useState } from 'react'
import backArrow from '../assets/back-arrow.png'
import nextArrow from '../assets/next-arrow.png'
import '../styles/Slideshow.scss'

const Slideshow = ({pictures}) => {
    const [slide, updateSlide] = useState(0)
    const handleNext = (e) => {
        if(slide >= pictures.length - 1) {
            updateSlide(0)
        } else {
            updateSlide(slide + 1)
        }
    }

    const handlePrev = (e) => {
        if(slide <= 0) {
            updateSlide(pictures.length - 1)
        } else {
            updateSlide(slide - 1)
        }
    }

    return (
        <div className='slideshow'>
            <div
                className='slideshow-container'
                style={{ transform: `translateX(-${slide * 100}%)` }}
            >
                {pictures.map((picture, index) => (
                    <img
                        key={index}
                        src={picture}
                        alt={`Photo ${index + 1}`}
                        className='slideshow-image'
                    />
                ))}
            </div>
            {pictures.length > 1 && (
                <>
                    <div className='navigation-arrows'>
                        <img
                            src={backArrow}
                            alt="Précédent"
                            onClick={handlePrev}
                            className='back-arrow'
                            />
                        <img
                            src={nextArrow}
                            alt="Suivant"
                            onClick={handleNext}
                            className='next-arrow'
                        />
                    </div>
                    <div className='slideshow-index'>
                        <p>{`${slide + 1}/${pictures.length}`}</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default Slideshow
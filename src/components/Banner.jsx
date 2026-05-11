import '../styles/Banner.scss'

const Banner = ({image, alt, title, className}) => {
    return (
        <div className='banner'>
            <img
                src={image}
                alt={alt}
                className={className ? className : ''}
            />
            {title && <h2>{title}</h2>}
        </div>
    )
}

export default Banner
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import bannerImage from '../assets/image-home.png'

const Home = () => {
    return (
        <>
            <Banner image={bannerImage} alt="Image d'une falaise en bord de mer" title="Chez vous, partout et ailleurs" className="black-filter"/>
            <Gallery />
        </>
    )
}

export default Home
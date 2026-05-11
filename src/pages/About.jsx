import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import aboutContent from '../datas/about-content.json'
import bannerImage from '../assets/image-about.png'

const About = () => {
    return (
        <>
            <Banner image={bannerImage} alt="Paysage de montagne" />
            {aboutContent.map((content) => (
                <Collapse
                    key={content.id}
                    title={content.title}
                    description={content.description}
                />
            ))}
        </>
    )
}

export default About
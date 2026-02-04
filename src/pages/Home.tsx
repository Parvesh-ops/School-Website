import EducationStages from "../components/EducationStage/EducationStage"
import Hero from "../components/Hero/Hero"
import Introduction from "../components/Introduction/Introduction"
import MidBanner from "../components/Midbanner/Midbanner"
import News from "../components/News&Event/News"
import SchoolGallery from "../components/SchoolGallery/SchoolGallery"



const Home = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <SchoolGallery />
      <EducationStages />
      <MidBanner />
      <News />
    </div>
  )
}

export default Home

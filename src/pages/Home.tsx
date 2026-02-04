import Hero from "../components/Hero/Hero"
import Introduction from "../components/Introduction/Introduction"
import MidBanner from "../components/Midbanner/Midbanner"
import SchoolGallery from "../components/SchoolGallery/SchoolGallery"



const Home = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <SchoolGallery />
      <MidBanner />
    </div>
  )
}

export default Home

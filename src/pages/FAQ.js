import FaqSection from "../components/FaqSection"
import Footer from "../components/Footer"
import FaqHero from "../components/HeroSections/FaqHero"
import HomeNavbar from "../components/Navbar/HomeNavbar"

const FAQ = () => {
  return (
    <HomeNavbar>
      <FaqHero />
      <FaqSection />
      <Footer />
    </HomeNavbar>
  )
}

export default FAQ

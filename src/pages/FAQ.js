import FaqSection from "../components/FaqSection"
import FaqHero from "../components/HeroSections/FaqHero"
import HomeNavbar from "../components/Navbar/HomeNavbar"

const FAQ = () => {
  return (
    <HomeNavbar>
      <FaqHero />
      <FaqSection />
    </HomeNavbar>
  )
}

export default FAQ

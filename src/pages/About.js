import AboutSection from "../components/AboutSection"
import HomeNavbar from "../components/Navbar/HomeNavbar"
import Reason from "../components/Reason"
import Subscription from "../components/Subscription"
import AboutHero from "../components/HeroSections/AboutHero"

const About = () => {
  return (
    <HomeNavbar>
      <AboutHero />
      <AboutSection />
      <Reason />
      <Subscription />
    </HomeNavbar>
  )
}

export default About

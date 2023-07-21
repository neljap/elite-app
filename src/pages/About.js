import AboutSection from "../components/AboutSection"
import HomeNavbar from "../components/Navbar/HomeNavbar"
import Reason from "../components/Reason"
import Subscription from "../components/Subscription"
import AboutHero from "../components/HeroSections/AboutHero"
import Footer from "../components/Footer"

const About = () => {
  return (
    <HomeNavbar>
      <AboutHero />
      <AboutSection />
      <Reason />
      <Subscription />
      <Footer />
    </HomeNavbar>
  )
}

export default About

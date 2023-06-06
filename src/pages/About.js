import AboutSection from "../components/AboutSection"
import HomeNavbar from "../components/Navbar/HomeNavbar"
import Reason from "../components/Reason"
import Subscription from "../components/Subscription"

const About = () => {
  return (
    <HomeNavbar>
      <AboutSection />
      <Reason />
      <Subscription />
    </HomeNavbar>
  )
}

export default About

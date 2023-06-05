import AboutSection from "../components/AboutSection"
import FundManager from "../components/FundManager"
import HeroHome from "../components/HeroHome"
import HighRef from "../components/HighRef"
import HowElite from "../components/HowElite"
import HomeNavbar from "../components/Navbar/HomeNavbar"
import Reason from "../components/Reason"

const Home = () => {
  return (
    <HomeNavbar>
      <HeroHome />
      <HowElite />
      <AboutSection />
      <HighRef />
      <Reason />
      <FundManager />
    </HomeNavbar>
  )
}

export default Home

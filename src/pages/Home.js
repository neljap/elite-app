import AboutSection from "../components/AboutSection"
import FundManager from "../components/FundManager"
import HeroHome from "../components/HeroHome"
import HighRef from "../components/HighRef"
import HowElite from "../components/HowElite"
import Investor from "../components/Investor"
import HomeNavbar from "../components/Navbar/HomeNavbar"
import Reason from "../components/Reason"
import Subscription from "../components/Subscription"
// import Testimonial from "../components/Testimonial"

const Home = () => {
  return (
    <HomeNavbar>
      <HeroHome />
      <HowElite />
      <AboutSection />
      <HighRef />
      <Reason />
      <FundManager />
      <Subscription />
      <Investor /> 
      {/* <Testimonial /> */}
    </HomeNavbar>
  )
}

export default Home

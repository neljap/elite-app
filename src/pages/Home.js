import AboutSection from "../components/AboutSection";
import ChatBox from "../components/ChatBox";
import DashboardBody from "../components/DashboardBody";
import { AiFillMessage } from "react-icons/ai";
// import FaqSection from "../components/FaqSection"
import FundManager from "../components/FundManager";
import HeroHome from "../components/HeroHome";
import HighRef from "../components/HighRef";
// import HowElite from "../components/HowElite"
import Investor from "../components/Investor";
import HomeNavbar from "../components/Navbar/HomeNavbar";
import Reason from "../components/Reason";
import Subscription from "../components/Subscription";
import { useRef } from "react";
import "../styles/HomeHero.styles.css";
import Footer from "../components/Footer";
// import Testimonial from "../components/Testimonial"

const Home = () => {
  const chatRef = useRef();

  const showChatBox = () => {
    chatRef.current.classList.toggle("chatboxStyles");
  };

  return (
    <HomeNavbar>
      <HeroHome />
      <div
        ref={chatRef}
        style={{
          position: "fixed",
          bottom: "50px",
          right: "95px",
        }}
      >
        <ChatBox />
      </div>
      {/* <HowElite /> */}
      <AboutSection />
      <HighRef />
      <Reason />
      <FundManager />
      <Subscription />
      <Investor />
      <div
        style={{
          height: "50px",
          width: "50px",
          backgroundColor: "#232A60",
          borderRadius: "50%",
          // padding: "25px",
          position: "fixed",
          bottom: "50px",
          right: "40px",
          cursor: "pointer",
          boxShadow: "0px 0px 3px rgb(146, 141, 141)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "10px",
        }}
        onClick={showChatBox}
      >
        {/* #232A60 */}
        <AiFillMessage
          color="white"
          size={30}
          style={
            {
              // position: "absolute",
              // top: "0",
              // left: "0",
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
            }
          }
        />
      </div>
      {/* <FaqSection /> */}
      {/* <Testimonial /> */}
      <Footer />
    </HomeNavbar>
  );
};

export default Home;

import ImgAbt from "./images/divAbt.png"
import "../styles/AboutSection.styles.css"

const AboutSection = () => {
  return (
    <div className="container">
        <div className="abt-sect-container">
            <div className="abt-sect">
                <img src={ImgAbt} alt="img" className="w-100" />
            </div>
            <div className="abt-sect">
                <h2>About Us</h2>
                <p>know about us</p>
                <p>
                Elite Capital Trading ltd. does not offer Contracts for Difference to
                residents of certain jurisdictions including the USA, Iran and Canada.
                With regards to the FSCA authorisation, Elite Capital Trading ltd.
                provides execution services and enters into principal to principal
                transactions with its clients on ECT prices. These transactions are
                not traded on an exchange. CFDs with ECT are not regulated by the FAIS
                Act and intermediary services are not provided
                </p>
            </div>
        </div>   
    </div>
    
  );
}

export default AboutSection

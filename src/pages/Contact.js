import HomeNavbar from "../components/Navbar/HomeNavbar"
import ContactHero from "../components/HeroSections/ContactHero"
import ContactForm from "../components/Forms/ContactForm"
import Footer from "../components/Footer"

const Contact = () => {
  return (
    <HomeNavbar>
      <ContactHero />
      <ContactForm />
      <Footer />
    </HomeNavbar>
  )
}

export default Contact

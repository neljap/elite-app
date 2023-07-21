import HomeNavbar from "../components/Navbar/HomeNavbar"
import SignInSection from "../components/HeroSections/SignInSection"
import SignInForm from "../components/Forms/SignInForm"
import Footer from "../components/Footer"

const SignIn = () => {
  return (
    <HomeNavbar>
      <SignInSection />
      <SignInForm />
      <Footer />
    </HomeNavbar>
  )
}

export default SignIn

import SignUpForm from "../components/Forms/SignUpForm"
import SignUpSection from "../components/HeroSections/SignUpSection"
import HomeNavbar from "../components/Navbar/HomeNavbar"

const SignUp = () => {
  return (
    <HomeNavbar>
        <SignUpSection />
        <SignUpForm />
    </HomeNavbar>
  )
}

export default SignUp
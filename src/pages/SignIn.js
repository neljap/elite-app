import HomeNavbar from "../components/Navbar/HomeNavbar"
import SignInSection from "../components/HeroSections/SignInSection"
import SignInForm from "../components/Forms/SignInForm"

const SignIn = () => {
  return (
    <HomeNavbar>
      <SignInSection />
      <SignInForm />
    </HomeNavbar>
  )
}

export default SignIn

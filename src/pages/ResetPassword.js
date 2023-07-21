import React from 'react'
import HomeNavbar from '../components/Navbar/HomeNavbar'
import ResetPwdForm from '../components/Forms/ResetPwdForm'
import ResetPwdHero from '../components/HeroSections/ResetPwdHero'
import Footer from '../components/Footer'

const ResetPassword = () => {
  return (
    <HomeNavbar>
        <ResetPwdHero />
        <ResetPwdForm />
        <Footer />
    </HomeNavbar>
  )
}

export default ResetPassword

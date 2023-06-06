import React from 'react'
import HomeNavbar from '../components/Navbar/HomeNavbar'
import ResetPwdForm from '../components/Forms/ResetPwdForm'
import ResetPwdHero from '../components/HeroSections/ResetPwdHero'

const ResetPassword = () => {
  return (
    <HomeNavbar>
        <ResetPwdHero />
        <ResetPwdForm />
    </HomeNavbar>
  )
}

export default ResetPassword

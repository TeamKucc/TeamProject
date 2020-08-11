import React from "react"
import LandingContainer from "../container/landing/LandingContainer"
import HeaderContainer from "../container/common/HeaderContainer"
import Header from '../components/common/Header'
const LandingPage = () => {
  return (
    <div>
      {/* <Header/> */}
      <HeaderContainer/>
      <LandingContainer/>
    </div>
  )
}

export default LandingPage

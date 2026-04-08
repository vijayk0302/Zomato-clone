import React from 'react'
import Hero from './Components/Hero'
import Overview from './Components/Overview'
import Feature from './Components/Feature'
import Curve from './Components/Curve'
import CardsSection from './Components/CardsSection'
import QrcodeSection from './Components/QrcodeSection'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Hero />
      <Overview/>
      <Feature/>
      <Curve/>
      <CardsSection/>
      <QrcodeSection/>
      <Footer/>
    </>
  )
}

export default App
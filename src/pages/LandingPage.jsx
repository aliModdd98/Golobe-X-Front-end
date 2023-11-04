import React from 'react'
import Footer from '../components/Footer/Footer'
import PlanPerfectTrip from '../components/PlanPerfectTrip/PlanPerfectTrip'
import Reviews from '../components/Reviews/Reviews'
import PhotosContainer from '../components/PhotosContainer/PhotosContainer'
import Header from '../components/Header/Header'

function LandingPage() {


  return (
    <>
      <Header />
      <PlanPerfectTrip />
      <PhotosContainer />
      <Reviews />
      <Footer />
    </>
  )
}

export default LandingPage
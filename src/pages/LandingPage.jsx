import React from 'react'
import Footer from '../components/Footer/Footer'
import PlanPerfectTrip from '../components/PlanPerfectTrip/PlanPerfectTrip'
import Reviews from '../components/Reviews/Reviews'
import PhotosContainer from '../components/PhotosContainer/PhotosContainer'
import DestinationPhotosContainer from '../components/DestinationPhotosContainer/DestinationPhotosContainer'

function LandingPage() {


  return (
    <>
      <DestinationPhotosContainer />
      <PlanPerfectTrip />
      <Reviews />
      <PhotosContainer />
      <Footer />
    </>
  )
}

export default LandingPage
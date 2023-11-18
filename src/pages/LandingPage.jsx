import React from 'react'
import Footer from '../components/Footer/Footer'
import PlanPerfectTrip from '../components/PlanPerfectTrip/PlanPerfectTrip'
import Reviews from '../components/Reviews/Reviews'
import FallIntoTravel from '../components/FallIntoTravel/FallIntoTravel'
import PhotosContainer from '../components/PhotosContainer/PhotosContainer'

import DestinationPhotosContainer from '../components/DestinationPhotosContainer/DestinationPhotosContainer'

import Header from '../components/Header/Header'

function LandingPage() {


  return (
    <>
      <Header />
      <DestinationPhotosContainer />
      <PlanPerfectTrip />
      <PhotosContainer />
      <Reviews />
      <FallIntoTravel />
      <Footer />

    </>
  )
}

export default LandingPage
import React from 'react'

import PriceDetails from './components/PriceDetails/PriceDetails';

import NavBar from '../components/NavBar/NavBar'
import FlightTracker from '../components/FlightTracker/FlightTracker'
import Footer from '../components/Footer/Footer'
import MainBookingDetails from '../components/MainBookingDetails/MainBookingDetails'


function BookingDetails() {
  const flightDetailes = {
    date: 'Return Wed, Dec 8',
    company: 'Emirates',
    flightDuration: '2h 28m',
    leavingTime: '12:00 pm',
    landingTime: '2:28 am'
  }
  return (
    <>



      <NavBar />
      <FlightTracker />
    <PriceDetails />
      <MainBookingDetails details={flightDetailes} />
      <Footer />

    </>
  )
}

export default BookingDetails
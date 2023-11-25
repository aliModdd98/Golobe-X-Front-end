import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import FlightTracker from '../components/FlightTracker/FlightTracker'
import Footer from '../components/Footer/Footer'
import MainBookingDetails from '../components/MainBookingDetails/MainBookingDetails'
import img1 from './../assets/flightDetailes-7.jpg'
import img2 from './../assets/hotel-1.jfif'

function BookingDetails({flight}) {
  const flightDetailes = {
    date: 'Return Wed, Dec 8',
    company: 'Emirates',
    flightDuration: '2h 28m',
    leavingTime: '12:00 pm',
    landingTime: '2:28 am',
    price : 240,
    title : 'Emirates A380 Airbus',
    location : 'Airbus A320',
    timeZone :'Newark(EWR)'
  }
  const hotelDetailes = {
    title : 'Superior room - 1 double bed or 2 twin beds',
    price : 240,
    company : 'CVK Park Bosphorus Hotel Istanbul',
    location : 'Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437',
    from : 'Thursday, Dec 8',
    to : 'Friday, Dec 9'
  }


  const flightBill = {
    img : img1 ,
    topTitle : 'Economy',
    title : 'Emirates A380 Airbus',
    rate : 4.2,
    reviewsNumber : 54,
    BaseFare : 400,
    Discount : 400,
    Taxes : 400,
    ServiceFee : 400
  }
  const hotelBill = {
    img : img2 ,
    topTitle : 'CVK Park Bosphorus...',
    title : 'Superior room - 1 double bed or 2 twin beds',
    rate : 4.2,
    reviewsNumber : 375,
    BaseFare : 240,
    Discount : 0,
    Taxes : 20,
    ServiceFee : 5
  }


  return (
    <>
      <NavBar />
      <FlightTracker country='Turkey' city='Istanbul' place='CVK Park Bosphorus Hotel Istanbul' />
      <MainBookingDetails flight={flight} details={flight ? flightDetailes : hotelDetailes} bill={flight ? flightBill : hotelBill} />
      <Footer />
    </>
  )
}

export default BookingDetails
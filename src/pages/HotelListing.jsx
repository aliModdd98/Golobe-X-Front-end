import React from 'react'
import HotelViewer from '../components/HotelViewer/HotelViewer'
import OverView from '../components/OverView/OverView'
import AvilableRoom from '../components/AvailableRoom/AvilableRoom'
import Map from '../components/Map/Map'
import Amenities from '../components/Amenities/Amenities'
import Footer from './../components/Footer/Footer'
import ReviewHotel from '../components/ReviewsHotel/ReviewHotel'
import FlightTracker from '../components/FlightTracker/FlightTracker'
import DetailsHeader from '../components/DetailsHeader/DetailsHeader'
function HotelListing() {
 const info=[
  {
    country:"Turkey",
    city:"Istanbul",
   address:"CVK Park Bosphorus Hotel Istanbul"
 
  }
 ]
  return (
    <>
     <FlightTracker info={info} />
     <DetailsHeader company='Emirates A380 Airbus' rate={4.2} Favorit button='Book now' />
<HotelViewer/>
<OverView/>
<AvilableRoom/>
<Map/>
<Amenities/>
<ReviewHotel/>
<Footer/>
    </>
  )
}

export default HotelListing
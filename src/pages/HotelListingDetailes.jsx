import React from 'react'
import HotelViewer from '../components/HotelViewer/HotelViewer'
import OverView from '../components/OverView/OverView'
import AvilableRoom from '../components/AvailableRoom/AvilableRoom'
import Map from '../components/Map/Map'
import Amenities from '../components/Amenities/Amenities'
import Footer from '../components/Footer/Footer'
import ReviewHotel from '../components/ReviewsHotel/ReviewHotel'

function HotelListingDetailes() {
    return (
        <>
        <HotelViewer/>
        <OverView />
        <AvilableRoom/>
        <Map />
        <Amenities/>
        <ReviewHotel />
        <Footer/>
        </>
    )
}

export default HotelListingDetailes
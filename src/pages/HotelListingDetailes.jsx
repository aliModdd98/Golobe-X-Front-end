import React from 'react'
import HotelViewer from '../components/HotelViewer/HotelViewer'
import OverView from '../components/OverView/OverView'
import AvilableRoom from '../components/AvailableRoom/AvilableRoom'
import Map from '../components/Map/Map'
import Amenities from '../components/Amenities/Amenities'

import ReviewHotel from '../components/ReviewsHotel/ReviewHotel'
import NavBar from '../components/NavBar/NavBar'

function HotelListingDetailes() {

    return (
        <>
            <HotelViewer />
            <OverView />
            <AvilableRoom />
            <Map />
            <Amenities />
            <ReviewHotel />
        </>
    )
}

export default HotelListingDetailes
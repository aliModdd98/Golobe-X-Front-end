

import NavBar from '../components/NavBar/NavBar'
import SearchFormSmall from '../components/SearchFormSmall/SearchFormSmall'
import FilteringSection from '../components/FilteringSection/FilteringSection'
import ResultCard from '../components/ResultCard/ResultCard'
import Tabs from '../components/Tabs/Tabs'
import Footer from '../components/Footer/Footer'

function HotelListing() {
    const listOne = [
        {
            id: 0,
            listitem: 'Free breakfast'
        },
        {
            id: 2,
            listitem: 'Free parking'
        },
        {
            id: 3,
            listitem: 'Free internet'
        },
        {
            id: 4,
            listitem: 'Free airport shuttle'
        },
        {
            id: 5,
            listitem: 'Free cancellation'
        }
    ]
    const ListTwo = [
        {
            id: 0,
            listitem: '24hr front desk'
        },
        {
            id: 2,
            listitem: 'Air-conditioned'
        },
        {
            id: 3,
            listitem: 'Fitness'
        },
        {
            id: 4,
            listitem: 'Pool'
        },
        {
            id: 5,
            listitem: 'Free Wi-Fi'
        },
        {
            id: 6,
            listitem: '24-hour front desk service'
        },
        {
            id: 7,
            listitem: 'Room service'
        },
        {
            id: 8,
            listitem: 'On-site restaurant'
        },
        {
            id: 9,
            listitem: 'Bar/lounge'
        },
        {
            id: 10,
            listitem: 'Fitness center'
        },
        {
            id: 11,
            listitem: 'Swimming pool'
        },
        {
            id: 12,
            listitem: 'Spa facilities'
        },
        {
            id: 13,
            listitem: 'Business center'
        },
        {
            id: 14,
            listitem: 'Concierge service'
        },
        {
            id: 15,
            listitem: 'Laundry facilities'
        },
        {
            id: 16,
            listitem: 'Shuttle service'
        },
        {
            id: 17,
            listitem: 'Parking facilities'
        },
        {
            id: 18,
            listitem: 'Conference and meeting rooms'
        },
        {
            id: 19,
            listitem: 'Breakfast buffet'
        },
        {
            id: 20,
            listitem: 'In-room safe'
        },
        {
            id: 21,
            listitem: 'Mini-bar'
        },
        {
            id: 22,
            listitem: 'Coffee/tea making facilities'
        },
        {
            id: 23,
            listitem: 'Hairdryer'
        },
        {
            id: 24,
            listitem: 'Ironing facilities'
        },
        {
            id: 25,
            listitem: 'TV with cable/satellite channels'
        },
        {
            id: 26,
            listitem: 'Air conditioning'
        },
        {
            id: 27,
            listitem: 'In-room telephone'
        },
    ]
    const filters = [
        {
            id: 0,
            category: 'Hotels',
            priceRange: '',
            timeRange: '257 places'
        },
        {
            id: 1,
            category: 'Motels',
            priceRange: '',
            timeRange: '51 places'
        },
        {
            id: 2,
            category: 'Resorts',
            priceRange: '',
            timeRange: '72 places'
        }
    ]



    

    return (
        <>
            <SearchFormSmall />
            <FilteringSection filters={filters} listOne={listOne} ListTwo={ListTwo} />
        </>
    )
    }

    
// import React from 'react'
// import HotelViewer from '../components/HotelViewer/HotelViewer'
// import OverView from '../components/OverView/OverView'
// import AvilableRoom from '../components/AvailableRoom/AvilableRoom'
// import Map from '../components/Map/Map'
// import Amenities from '../components/Amenities/Amenities'
// import Footer from './../components/Footer/Footer'
// import ReviewHotel from '../components/ReviewsHotel/ReviewHotel'
// import FlightTracker from '../components/FlightTracker/FlightTracker'
// import DetailsHeader from '../components/DetailsHeader/DetailsHeader'
// function HotelListing() {
//  const info=[
//   {
//     country:"Turkey",
//     city:"Istanbul",
//    address:"CVK Park Bosphorus Hotel Istanbul"
 
//   }
//  ]
//   return (
//     <>
//      <FlightTracker info={info} />
//      <DetailsHeader company='Emirates A380 Airbus' rate={4.2} Favorit button='Book now' />
// <HotelViewer/>
// <OverView/>
// <AvilableRoom/>
// <Map/>
// <Amenities/>
// <ReviewHotel/>
// <Footer/>
//     </>
//   )

// }

export default HotelListing
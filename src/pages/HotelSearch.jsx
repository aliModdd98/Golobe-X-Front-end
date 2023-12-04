import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/Hero/Hero'
import background from './../assets/hotelHeaderCover.jfif'
import SearchForm from '../components/SearchForm/SearchForm'
import FallIntoTravel from '../components/FallIntoTravel/FallIntoTravel'
import DestinationPhotosContainer from '../components/DestinationPhotosContainer/DestinationPhotosContainer'
import PlanPerfect from '../components/PlanPerfectTrip/PlanPerfect'

function HotelSearch() {
    return (
        <>
            <Hero
                className='vh-100'
                img={background}
                title='Make your travel whishlist, we’ll do the rest'
                subTitle='Special offers to suit your plan' />
            <SearchForm hotels />
            <PlanPerfect/>
            <DestinationPhotosContainer hotels />
            <FallIntoTravel />
        </>
    )
}

export default HotelSearch
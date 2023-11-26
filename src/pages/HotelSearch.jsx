import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/Hero/Hero'
import background from './../assets/hotelHeaderCover.jfif'
import SearchForm from '../components/SearchForm/SearchForm'
import Footer from '../components/Footer/Footer'
import FallIntoTravel from '../components/FallIntoTravel/FallIntoTravel'

function HotelSearch() {
    return (
        <>
            <NavBar />
            <Hero
                className='vh-100'
                img={background}
                title='Make your travel whishlist, we’ll do the rest'
                subTitle='Special offers to suit your plan' />
            <SearchForm hotels />
            <FallIntoTravel />
            <Footer />
        </>
    )
}

export default HotelSearch
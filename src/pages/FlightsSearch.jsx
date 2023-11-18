import React from 'react'
// <<<<<<< hasan-alhasan
// import FallIntoTravel from '../components/FallIntoTravel/FallIntoTravel'
// function FlightSearch() {
//   return (
//     <>
//     <FallIntoTravel />

import Hero from '../components/Hero/Hero'
import background from './../assets/FlightSeach.jpg'
import NavBar from '../components/NavBar/NavBar'
import SearchForm from '../components/SearchForm/SearchForm'
import Footer from '../components/Footer/Footer'
import FallIntoTravel from '../components/FallIntoTravel/FallIntoTravel'
import FlightMap from '../components/FlightMap/FlightMap'

function FlightSearch() {
  return (
    <>
      <NavBar />
      <Hero
        className='vh-100'
        img={background}
        title='Make your travel whishlist, we’ll do the rest'
        subTitle='Special offers to suit your plan' />
      <SearchForm />
      <FlightMap />
      <FallIntoTravel />
      <Footer />

    </>
  )
}

export default FlightSearch
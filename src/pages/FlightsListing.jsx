import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import SearchFormSmall from '../components/SearchFormSmall/SearchFormSmall'
import FilteringSection from '../components/FilteringSection/FilteringSection'
import Footer from '../components/Footer/Footer'

function FlightsListing() {

  const listOne = [
    {
      id : 0,
      listitem : 'Emirated'
    },
    {
      id : 2,
      listitem : 'Emirated'
    },
    {
      id : 3,
      listitem : 'Emirated'
    },
    {
      id : 4,
      listitem : 'Emirated'
    }
  ]
  const ListTwo = [
    {
      id : 0,
      listitem : 'Round trip'
    },
    {
      id : 2,
      listitem : 'On Way'
    },
    {
      id : 3,
      listitem : 'Multi-City'
    },
    {
      id : 4,
      listitem : 'My Dates Are Flexible'
    }
  ]
  

  return (
    <>
      <NavBar />
      <SearchFormSmall flight />
      <FilteringSection flight listOne={listOne} ListTwo={ListTwo} />
      <Footer />
    </>
  )
}

export default FlightsListing
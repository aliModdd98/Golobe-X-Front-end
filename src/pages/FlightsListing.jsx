import React, { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import SearchFormSmall from '../components/SearchFormSmall/SearchFormSmall'
import FilteringSection from '../components/FilteringSection/FilteringSection'
import Footer from '../components/Footer/Footer'
import { results } from './../components/SearchResultsSection/flightsData'
import Tabs from '../components/Tabs/Tabs'
import ResultCard from '../components/ResultCard/ResultCard'

function FlightsListing() {

  const listOne = [
    {
      id: 0,
      listitem: 'Emirated'
    },
    {
      id: 2,
      listitem: 'Fly Dubai'
    },
    {
      id: 3,
      listitem: 'Qatar'
    },
    {
      id: 4,
      listitem: 'Etihad'
    }
  ]
  const ListTwo = [
    {
      id: 0,
      listitem: 'Round trip'
    },
    {
      id: 2,
      listitem: 'On Way'
    },
    {
      id: 3,
      listitem: 'Multi-City'
    },
    {
      id: 4,
      listitem: 'My Dates Are Flexible'
    }
  ]
  const filters = [
    {
      id: 0,
      category: 'Cheapest',
      priceRange: 99,
      timeRange: '2h 18m'
    },
    {
      id: 1,
      category: 'Best',
      priceRange: 99,
      timeRange: '2h 18m'
    },
    {
      id: 2,
      category: 'Quickest',
      priceRange: 99,
      timeRange: '2h 18m'
    }
  ]


  const [showMore, setShowMore] = useState(false);
  const [selected, setSelected] = useState(0);
  const handleClick = (id) => {
    setSelected(id);
  }

  return (
    <>
      <NavBar />
      <SearchFormSmall flight />
      <FilteringSection flight filters={filters} listOne={listOne} ListTwo={ListTwo} />
      <Footer />
    </>
  )
}

export default FlightsListing
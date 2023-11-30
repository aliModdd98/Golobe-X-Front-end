import SearchFormSmall from '../components/SearchFormSmall/SearchFormSmall'
import FilteringSection from '../components/FilteringSection/FilteringSection'

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

  return (
    <>
      <SearchFormSmall flight />
      <FilteringSection flight filters={filters} listOne={listOne} ListTwo={ListTwo} />
    </>
  )
}

export default FlightsListing
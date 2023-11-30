import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Tabs from '../Tabs/Tabs'
import './FavoriteFilters.css'
import { results, hotelRes } from '../SearchResultsSection/flightsData'
import ResultCard from '../ResultCard/ResultCard'

function FavoriteFilters() {
    const [selected, setSelected] = useState(0);
    const handleClick = (id) => {
        setSelected(id);
    }
    const filters = [
        {
            id: 0,
            category: 'Flights',
            priceRange: '',
            timeRange: '2 marked'
        },
        {
            id: 1,
            category: 'Places',
            priceRange: '',
            timeRange: '3 marked'
        }
    ]
    return (
        <Container className='mt-5 pt-5'>
            <h1 className='my-4 fa_favourite-tltle'>Favourites</h1>
            <Tabs filters={filters} state={selected} setState={handleClick} />
            <div className='my-5'>
                {
                    (selected == 0)
                        ? results.map(res => (
                            res.favorite
                                ? <ResultCard
                                    flight
                                    key={res.id}
                                    img={res.img}
                                    favoriteActive={res.favorite}
                                    rate={res.rate}
                                    startingPrice={res.startingPrice}
                                    firstTrip={res.firstTrip}
                                    secondTrip={res.secondTrip} />
                                : null
                        ))
                        : hotelRes.map(res => (
                            res.favorite
                                ? <ResultCard
                                    key={res.id}
                                    img={res.img}
                                    title={res.title}
                                    startingPrice={res.price}
                                    rate={res.rate}
                                    reviewsNumber={res.reviewsNumber}
                                    location={res.location}
                                    aminties={res.aminites}
                                    favoriteActive={res.favorite} />
                                : null
                        ))
                }
            </div>
        </Container>
    )
}

export default FavoriteFilters
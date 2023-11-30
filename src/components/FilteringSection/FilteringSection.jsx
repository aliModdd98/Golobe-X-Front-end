import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FiltersAccordion from '../FiltersAccordion/FiltersAccordion'
import { hotelRes, results } from './../SearchResultsSection/flightsData'
import './FilteringSection.css'
import RangInput from '../RangInput/RangInput'
import Tabs from '../Tabs/Tabs'
import ResultCard from '../ResultCard/ResultCard'

function FilteringSection({ flight, listOne, ListTwo, filters }) {
    const [activeButton, setActiveButton] = useState(-1)
    const [showMore, setShowMore] = useState(false);
    const [selected, setSelected] = useState(0);
    const handleClick = (id) => {
        setSelected(id);
    }
    const ratings = [0, 1, 2, 3, 4];

    const [seeMore, setSeeMore] = useState(false);
    const handleRating = (rateSelected) => {
        setActiveButton(rateSelected)
    }

    return (
        <section className='my-5'>
            <Container>
                <Row>
                    <Col lg={4} className='border-end border-secondary-subtle d-flex'>
                        <div className='pe-3 pb-3 w-100 position-sticky bottom-0 align-self-end'>
                            <h1 className='fa_filters-title mb-2'>Filters</h1>
                            <div>
                                <FiltersAccordion title='price'>
                                    <RangInput max={1200} min={50} />
                                </FiltersAccordion>
                                {
                                    flight && <FiltersAccordion title='Departure Time'>
                                        <RangInput max={1440} min={0} time />
                                    </FiltersAccordion>
                                }
                                <FiltersAccordion title='Rating'>
                                    <div className='d-flex gap-3'>
                                        {
                                            ratings.map((rate) => (
                                                <button className={`bg-transparent rounded-2 d-flex justify-content-center align-items-center fa_rating-item border-orange ${(rate == activeButton) ? 'selected' : ''}`}
                                                    onClick={() => handleRating(rate)}
                                                    key={rate}>
                                                    {rate}+
                                                </button>
                                            ))
                                        }
                                    </div>
                                </FiltersAccordion>
                                <FiltersAccordion title={flight ? 'Airlines' : 'Freebies'}>
                                    {
                                        listOne.map((item) => (
                                            <div className='fa_checkbox d-flex align-items-center mb-3' key={item.id}>
                                                <input type="checkbox" id={item.listitem} className='me-2 border border-black' />
                                                <label htmlFor={item.listitem}>{item.listitem}</label>
                                            </div>
                                        ))
                                    }
                                </FiltersAccordion>
                                {
                                    flight
                                        ? <FiltersAccordion title='Trips'>
                                            {
                                                ListTwo.map((item) => (
                                                    <div className='fa_checkbox d-flex align-items-center mb-3' key={item.id}>
                                                        <input type="checkbox" id={item.listitem} className='me-2 border border-black' />
                                                        <label htmlFor={item.listitem}>{item.listitem}</label>
                                                    </div>
                                                ))
                                            }
                                        </FiltersAccordion>
                                        : <FiltersAccordion title='Amenities'>
                                            {
                                                ListTwo.slice(0, 4).map((item) => (
                                                    <div className='fa_checkbox d-flex align-items-center mb-3' key={item.id}>
                                                        <input type="checkbox" id={item.listitem} className='me-2 border border-black' />
                                                        <label htmlFor={item.listitem}>{item.listitem}</label>
                                                    </div>
                                                ))
                                            }
                                            {
                                                seeMore && ListTwo.slice(4).map((item) => (
                                                    <div className='fa_checkbox d-flex align-items-center mb-3' key={item.id}>
                                                        <input type="checkbox" id={item.listitem} className='me-2 border border-black' />
                                                        <label htmlFor={item.listitem}>{item.listitem}</label>
                                                    </div>
                                                ))
                                            }
                                            <button className='border-0 bg-transparent px-0 fa_text-pink' onClick={() => { setSeeMore(!seeMore) }}>
                                                {
                                                    (seeMore) ? 'see less' : '+24 more'
                                                }
                                            </button>
                                        </FiltersAccordion>
                                }
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <Tabs filters={filters} state={selected} setState={handleClick} />
                        <p className='my-3 fa_cards-number'>
                            Showing {showMore ? hotelRes.length : 4} of <span className='text-orange'>{hotelRes.length} places</span>
                        </p>
                        {
                            flight
                                ? (showMore)
                                    ? results.map(res => (
                                        <ResultCard
                                            flight
                                            key={res.id}
                                            img={res.img}
                                            favoriteActive={res.favorite}
                                            rate={res.rate}
                                            startingPrice={res.startingPrice}
                                            firstTrip={res.firstTrip}
                                            secondTrip={res.secondTrip} />
                                    ))
                                    : results.slice(0, 4).map(res => (
                                        <ResultCard
                                            flight
                                            key={res.id}
                                            img={res.img}
                                            favoriteActive={res.favorite}
                                            rate={res.rate}
                                            startingPrice={res.startingPrice}
                                            firstTrip={res.firstTrip}
                                            secondTrip={res.secondTrip} />
                                    ))
                                : (showMore)
                                    ? hotelRes.map(res => (
                                        <ResultCard
                                            key={res.id}
                                            img={res.img}
                                            title={res.title}
                                            startingPrice={res.price}
                                            rate={res.rate}
                                            reviewsNumber={res.reviewsNumber}
                                            location={res.location}
                                            aminties={res.aminites}
                                            favoriteActive={res.favorite} />
                                    ))
                                    : hotelRes.slice(0, 4).map(res => (
                                        <ResultCard
                                            key={res.id}
                                            img={res.img}
                                            title={res.title}
                                            startingPrice={res.price}
                                            rate={res.rate}
                                            reviewsNumber={res.reviewsNumber}
                                            location={res.location}
                                            aminties={res.aminites}
                                            favoriteActive={res.favorite} />
                                    ))
                        }
                        <button className='w-100 py-2 bg-dark text-white border-0 fa_more_results-button' onClick={() => { setShowMore(!showMore) }}>
                            Show {showMore ? 'less' : 'more'} results
                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FilteringSection
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FiltersAccordion from '../FiltersAccordion/FiltersAccordion'
import './FilteringSection.css'
import RangInput from '../RangInput/RangInput'
import SearchResultsSection from '../SearchResultsSection/SearchResultsSection'

function FilteringSection({ flight, listOne, ListTwo }) {
    const [activeButton, setActiveButton] = useState(-1)

    const filters = [
        {
            id : 0,
            category : 'Cheapest',
            priceRange : 99,
            timeRange : '2h 18m'
        },
        {
            id : 1,
            category : 'Best',
            priceRange : 99,
            timeRange : '2h 18m'
        },
        {
            id : 2,
            category : 'Quickest',
            priceRange : 99,
            timeRange : '2h 18m'
        }
    ]
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
                        <SearchResultsSection filters={filters} other />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FilteringSection
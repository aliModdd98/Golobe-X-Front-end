import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TripCard from '../TripCard/TripCard'
import grid1 from './../../assets/grid-1.png'
import grid2 from './../../assets/grid-2.png'
import grid3 from './../../assets/grid-3.png'
import grid4 from './../../assets/grid-4.png'
import grid5 from './../../assets/grid-5.png'
import grid6 from './../../assets/grid-6.png'
import grid7 from './../../assets/grid-7.png'
import grid8 from './../../assets/grid-8.png'

import SectionTitle from '../SectionTitle/SectionTitle'
import { useState } from 'react'

function PlanPerfect() {
    const grids = [
        {
            id: 1,
            img: grid1,
            country: 'Istanbul, Turkey',
            services: ['Flights', 'Hotels', 'Resorts']
        },
        {
            id: 2,
            img: grid2,
            country: 'Sydney, Australia',
            services: ['Flights', 'Hotels', 'Resorts']
        },
        {
            id: 3,
            img: grid3,
            country: 'Baku, Azerbaijan',
            services: ['Flights', 'Hotels', 'Resorts']
        },
        {
            id: 4,
            img: grid4,
            country: 'Malé, Maldives',
            services: ['Flights', 'Hotels', 'Resorts']
        },
        {
            id: 5,
            img: grid5,
            country: 'Paris, France',
            services: ['Flights', 'Hotels', 'Resorts']
        },
        {
            id: 6,
            img: grid6,
            country: 'New York, US',
            services: ['Flights', 'Hotels', 'Resorts']
        },
        {
            id: 7,
            img: grid7,
            country: 'London, UK',
            services: ['Flights', 'Hotels', 'Resorts']
        },
        {
            id: 8,
            img: grid8,
            country: 'Tokyo, Japan',
            services: ['Flights', 'Hotels', 'Resorts']
        },

    ]
    const [clicked, setClicked] = useState(false);

    return (
        <>
            <section className='mt-5'>
                <Container>
                    <SectionTitle title='Your recent searches'
                        button={(clicked) ? 'see less places' : 'see more places'}
                        stateV={clicked}
                        setState={setClicked} />
                    <Row className='mt-4'>
                        {
                            grids.slice(0, 4).map((grid) => {
                                return (
                                    <Col key={grid.id} xl={3} lg={6}>
                                        <TripCard
                                            hotel
                                            img={grid.img}
                                            country={grid.country}
                                            services={grid.services} />
                                    </Col>
                                );
                            })
                        }
                        {
                            (clicked)
                                ? grids.slice(4, 8).map((grid) => {
                                    return (
                                        <Col key={grid.id} xl={3} lg={6}>
                                            <TripCard
                                                hotel
                                                img={grid.img}
                                                country={grid.country}
                                                services={grid.services} />
                                        </Col>
                                    );
                                })
                                : null
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default PlanPerfect
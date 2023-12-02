import React from 'react'
import { Container } from 'react-bootstrap'
import SectionTitle from '../SectionTitle/SectionTitle'
import map from './../../assets/OrangMap.png'

function FlightMap() {
    return (
        <>
            <Container className='mt-5'>
                <SectionTitle title="Let's go places together" subTitle="Discover the latest offers and news and start planning your next trip with us." button="See All" />
            </Container>
            <Container fluid className='px-0 mt-4'>
                <img src={map} alt="map" className='w-100' />
            </Container>
        </>
    )
}

export default FlightMap
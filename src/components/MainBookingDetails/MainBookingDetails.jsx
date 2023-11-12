import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FlightDetailsCard from '../FlightDetailsCard/FlightDetailsCard'
import LogInToBook from '../LogInToBook/LogInToBook'

function MainBookingDetails({ details }) {
    return (
        <Container>
            <Row>
                <Col lg={8}>
                    <FlightDetailsCard
                        date={details.date}
                        company={details.company}
                        flightDuration={details.flightDuration}
                        leavingTime={details.leavingTime}
                        landingTime={details.landingTime}
                        price />
                        <LogInToBook />
                </Col>
                <Col lg={4}>
                    hello
                </Col>
            </Row>
        </Container>
    )
}

export default MainBookingDetails
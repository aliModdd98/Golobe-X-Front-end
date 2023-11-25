import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FlightDetailsCard from '../FlightDetailsCard/FlightDetailsCard'
import LogInToBook from '../LogInToBook/LogInToBook'
import Bill from '../Bill/Bill'

function MainBookingDetails({ flight, details, bill }) {
    return (
        <Container>
            <Row className='mb-5'>
                <Col lg={8}>
                    {
                        flight
                            ? <FlightDetailsCard
                                date={details.date}
                                company={details.company}
                                flightDuration={details.flightDuration}
                                leavingTime={details.leavingTime}
                                landingTime={details.landingTime}
                                price={details.price}
                                title={details.title}
                                location={details.location}
                                timeZone={details.timeZone}
                                flight={flight} />
                            : <FlightDetailsCard
                                company={details.company}
                                leavingTime={details.from}
                                landingTime={details.to}
                                price={details.price}
                                title={details.title}
                                location={details.location}
                                flight={flight} />
                    }
                    <LogInToBook />
                </Col>
                <Col lg={4}>
                    <Bill 
                    topTitle={bill.topTitle}
                    title={bill.title}
                    img={bill.img}
                    BaseFare={bill.BaseFare}
                    Discount={bill.Discount}
                    Taxes={bill.Taxes}
                    ServiceFee={bill.ServiceFee}
                    rate={bill.rate}
                    reviewsNumber={bill.reviewsNumber} />
                </Col>
            </Row>
        </Container>
    )
}

export default MainBookingDetails
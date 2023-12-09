
import { Col, Container, Row } from 'react-bootstrap'
import FlightTracker from '../FlightTracker/FlightTracker'
import FlightDetailsCard from '../FlightDetailsCard/FlightDetailsCard'
import PaymentComponent from '../PaymentComponent/PaymentComponent'
import LogInToBook from '../LogInToBook/LogInToBook'
import Bill from '../Bill/Bill'
import PriceDetails from '../PriceDetails/PriceDetails'

function BookingDetailsWithLogin({ flight, details, bill }) {

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
                    <PaymentComponent />
                    <PriceDetails flight={flight} />
                </Col>
                <Col lg={4}>
                    <Bill
                        flight={flight}
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

export default BookingDetailsWithLogin
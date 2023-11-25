
import { Container, Row, Col } from 'react-bootstrap'
import FlightDetailsCard from '../FlightDetailsCard/FlightDetailsCard'
import LogInToBook from '../LogInToBook/LogInToBook'
import Bill from '../Bill/Bill'
import PriceDetails from '../PriceDetails/PriceDetails'
import PaymentComponent from '../PaymentComponent/PaymentComponent'
import FlightTracker from '../FlightTracker/FlightTracker'

function MainBookingDetails({ details }) {
    return (
        <Container>
            <Row className='mb-5'>
            <FlightTracker />
                <Col lg={8}>
                    <FlightDetailsCard
                        date={details.date}
                        company={details.company}
                        flightDuration={details.flightDuration}
                        leavingTime={details.leavingTime}
                        landingTime={details.landingTime}
                        price />
                        <PaymentComponent/>
                        {/* <PriceDetails /> */}
                        <LogInToBook />
                </Col>
                <Col lg={4}>
                    <Bill />
                </Col>
            </Row>
        </Container>
    )
}

export default MainBookingDetails
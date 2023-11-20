
import { Container, Row, Col } from 'react-bootstrap'
import FlightDetailsCard from '../FlightDetailsCard/FlightDetailsCard'
import LogInToBook from '../LogInToBook/LogInToBook'
import Bill from '../Bill/Bill'
import PriceDetails from '../PriceDetails/PriceDetails'

function MainBookingDetails({ details }) {
    return (
        <Container>
            <Row className='mb-5'>
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
                    <Bill />
                </Col>
            </Row>
        </Container>
    )
}

export default MainBookingDetails
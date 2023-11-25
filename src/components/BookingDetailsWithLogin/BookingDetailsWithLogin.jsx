
import { Col, Container, Row } from 'react-bootstrap'
import FlightTracker from '../FlightTracker/FlightTracker'
import FlightDetailsCard from '../FlightDetailsCard/FlightDetailsCard'
import PaymentComponent from '../PaymentComponent/PaymentComponent'
import LogInToBook from '../LogInToBook/LogInToBook'
import Bill from '../Bill/Bill'
import PriceDetails from '../PriceDetails/PriceDetails'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

function BookingDetailsWithLogin(details) {
  return (
    <Container >
      <NavBar/>
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
                <PriceDetails />
              
        </Col>
        <Col lg={4}>
            <Bill />
        </Col>
    </Row>
    <Footer/>
</Container>
  )
}

export default BookingDetailsWithLogin
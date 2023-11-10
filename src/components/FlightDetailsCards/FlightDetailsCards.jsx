import { Container } from 'react-bootstrap'
import './FlightDetailsCards.css'
import FlightDetailsCard from '../FlightDetailsCard/FlightDetailsCard'

function FlightDetailsCards() {
    const flightCardDetailes = [
        {
            date : 'Return Wed, Dec 8',
            company : 'Emirates',
            flightDuration : '2h 28m',
            leavingTime : '12:00 pm',
            landingTime : '2:28 am'
        },
        {
            date : 'Return Wed, Dec 8',
            company : 'Emirates',
            flightDuration : '2h 28m',
            leavingTime : '12:00 pm',
            landingTime : '2:28 am'
        }
    ]
    return (
        <section>
            <Container>
                {
                    flightCardDetailes.map(item => (
                        <FlightDetailsCard date={item.date} company={item.company} flightDuration={item.flightDuration} leavingTime={item.leavingTime} landingTime={item.landingTime} />
                    ))
                }
            </Container>
        </section>
    )
}

export default FlightDetailsCards
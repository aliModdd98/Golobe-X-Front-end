
import NavBar from '../components/NavBar/NavBar'
import FlightTracker from '../components/FlightTracker/FlightTracker'
import DetailsHeader from '../components/DetailsHeader/DetailsHeader'
import Ticket from '../components/Ticket/Ticket'
import TermsConditions from '../components/TermsConditions/TermsConditions'
import Footer from '../components/Footer/Footer'

function FlightTicket() {
    return (
        <>
        <NavBar />
        <FlightTracker />
        <DetailsHeader company='Emirates A380 Airbus' button='Downlooad' />
        <Ticket from='12:00 pm' to='12:00 pm' timeZone='Newark(EWR)' userName='James Doe' boredPass='Boarding Pass N’123' classType='Busniess Class' date='Newark(EWR)' FlightTime='12:00' Gate='A12' Seat='128' />
        <TermsConditions />
        <Footer />
        </>
    )
}

export default FlightTicket
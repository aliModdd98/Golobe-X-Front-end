
import BookingDetailsWithLogin from '../components/BookingDetailsWithLogin/BookingDetailsWithLogin'

function BookingDetailsWithLoging() {
  const flightDetailes = {
    date: 'Return Wed, Dec 8',
    company: 'Emirates',
    flightDuration: '2h 28m',
    leavingTime: '12:00 pm',
    landingTime: '2:28 am'
  }
  return (
    <>
  
<BookingDetailsWithLogin details={flightDetailes}/>
  
    </>
  )
}

export default BookingDetailsWithLoging

import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import DetailsHeader from '../components/DetailsHeader/DetailsHeader'
import FlightClass from '../components/FlightClass/FlightClass'

import image1 from '../assets/flightDetailes-1.jpg'
import image2 from './../assets/flightDetailes-2.jpg'
import image3 from './../assets/flightDetailes-3.jpg'
import image4 from './../assets/flightDetailes-4.jpg'
import image5 from './../assets/flightDetailes-5.jpg'
import image6 from './../assets/flightDetailes-6.jpg'
import image7 from './../assets/flightDetailes-7.jpg'
import FlightNotes from '../components/FlightNotes/FlightNotes'
import FlightDetailsCards from '../components/FlightDetailsCards/FlightDetailsCards'
import FlightTracker from '../components/FlightTracker/FlightTracker'

function FlightDetails() {
  const imgs = [
    {
      id: 0,
      img: image1
    },
    {
      id: 1,
      img: image2
    },
    {
      id: 2,
      img: image3
    },
    {
      id: 3,
      img: image4
    },
    {
      id: 4,
      img: image5
    },
    {
      id: 5,
      img: image6
    },
    {
      id: 6,
      img: image7
    },
    {
      id: 7,
      img: image2
    },
    {
      id: 8,
      img: image1
    }
  ]

  return (
    <>
      <FlightTracker country='Turkey' city='Istanbul' place='CVK Park Bosphorus Hotel Istanbul' />
      <DetailsHeader flight company='Emirates A380 Airbus' rate={4.2} Favorit button='Book now' price={204} location='Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437' />
      <FlightClass imgs={imgs} />
      <FlightNotes />
      <FlightDetailsCards />
    </>
  )
}

export default FlightDetails
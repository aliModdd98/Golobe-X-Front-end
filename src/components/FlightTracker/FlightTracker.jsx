import { Container } from 'react-bootstrap'
import { BiChevronRight } from 'react-icons/bi'
import './FlightTracker.css'

function FlightTracker({country, city, place}) {
    return (
        <Container className='mt-5 pt-5'>
            <div className='d-flex align-items-center gap-2 fa_Tracker my-4'>
                <p className='mb-0 text-orange'>{country}</p>
                <BiChevronRight />
                <p className='mb-0 text-orange'>{city}</p>
                <BiChevronRight />
                <p className='mb-0 opacity-75'>{place}</p>
            </div>


        </Container>
    )
}

export default FlightTracker
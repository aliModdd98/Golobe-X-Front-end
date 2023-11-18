import { Container } from 'react-bootstrap'
import { BiChevronRight } from 'react-icons/bi'
import './FlightTracker.css'

function FlightTracker() {
    return (
        <Container className='mt-5 pt-5'>
            <div className='d-flex align-items-center gap-2 fa_Tracker my-4'>
                <p className='mb-0 text-orange'>Turkey</p>
                <BiChevronRight />
                <p className='mb-0 text-orange'>Istanbul</p>
                <BiChevronRight />
                <p className='mb-0 opacity-75'>CVK Park Bosphorus Hotel Istanbul</p>
            </div>
        </Container>
    )
}

export default FlightTracker
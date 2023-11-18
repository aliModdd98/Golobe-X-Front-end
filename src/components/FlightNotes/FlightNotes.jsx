import { Container, Row, Col } from 'react-bootstrap'
import './FlightNotes.css'
import { AiFillClockCircle } from 'react-icons/ai'

function FlightNotes() {
    return (
        <Container className='my-5'>
            <div className='fa_flight-notes rounded-3 p-2'>
                <h1 className='fa_flight-not-title'>Emirates Airlines Policies</h1>
                <Row xs={2}>
                    <Col className='d-flex align-items-center'>
                        <AiFillClockCircle className='me-3' />
                        <p className='mb-0 fa_note-p opacity-75'>
                            Pre-flight cleaning, installation of cabin HEPA filters.
                        </p>
                    </Col>
                    <Col className='d-flex align-items-center'>
                        <AiFillClockCircle className='me-3' />
                        <p className='mb-0 fa_note-p opacity-75'>
                            Pre-flight health screening questions.
                        </p>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default FlightNotes
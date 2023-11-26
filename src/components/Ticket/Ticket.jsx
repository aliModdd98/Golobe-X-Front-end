import './Ticket.css'
import { Col, Container, Row } from 'react-bootstrap'
import threeLine from './../../assets/Vector 1.svg'
import airplane from './../../assets/airplane.svg'
import building from './../../assets/building.svg'
import user from './../../assets/user.jpg'
import FrameTicket from './../../assets/FrameTicket.png'
import hotel from './../../assets/CVK.png'
import { BsFillCalendarEventFill, BsFillDoorClosedFill } from 'react-icons/bs'
import { AiFillClockCircle } from 'react-icons/ai'
import { MdAirlineSeatReclineExtra } from 'react-icons/md'

function Ticket({ from, to, timeZone, userName, boredPass, classType, date, FlightTime, Gate, Seat, checkOut }) {
    return (
        <Container>
            <Row className='fa_ticket'>
                <Col lg={9} className='shadow-sm overflow-hidden rounded-4'>
                    <Row>
                        <Col lg={3} className='fa_fromTo bg-light_blue p-4'>
                            <p className='mb-0 fa_fromTo-title'>{from}</p>
                            <p className='mb-0 fa_sub-fromto'>
                                {
                                    timeZone ? timeZone : 'Check in'
                                }
                            </p>
                            <div className='d-flex flex-column align-items-center gap-2 fa_fromto-svg my-3'>
                                <img src={threeLine} alt="threeLine" />
                                <img src={timeZone ? airplane : building} alt="airplane" />
                                <img src={threeLine} alt="threeLine" />
                            </div>
                            <p className='mb-0 fa_fromTo-title'>{to}</p>
                            <p className='mb-0 fa_sub-fromto'>
                                {
                                    timeZone ? timeZone : 'Check out'
                                }
                            </p>
                        </Col>
                        <Col lg={9} className='bg-white px-0 d-flex flex-column'>
                            <div className='p-4 d-flex justify-content-between align-items-center bg-orange'>
                                <div className='d-flex align-items-center gap-3'>
                                    <div className='fa_aspect_ratio-1 fa_user_img'>
                                        <img src={user} alt="user" className='w-100 h-100 object-fit-cover rounded-pill border border-white' />
                                    </div>
                                    <div>
                                        <p className='mb-0 fa_userName'>{userName}</p>
                                        {
                                            timeZone && <p className='mb-0 fa_boredPass'>{boredPass}</p>
                                        }
                                    </div>
                                </div>
                                <p className='mb-0 fa_classType'>{classType}</p>
                            </div>
                            <div className='p-4'>
                                <Row>
                                    {
                                        timeZone &&
                                        <Col className='d-flex align-items-center gap-2'>
                                            <div className='bg-light_blue fa_ticket-icons text-orange d-flex justify-content-center align-items-center fa_aspect_ratio-1'>
                                                <BsFillCalendarEventFill />
                                            </div>
                                            <div className='fa_ticket-detailes'>
                                                <p>Date</p>
                                                <p className='mb-0'>{date}</p>
                                            </div>
                                        </Col>
                                    }
                                    <Col className='d-flex align-items-center gap-2'>
                                        <div className='bg-light_blue fa_ticket-icons text-orange d-flex justify-content-center align-items-center fa_aspect_ratio-1'>
                                            <AiFillClockCircle />
                                        </div>
                                        <div className='fa_ticket-detailes'>
                                            <p>{timeZone ? 'Flight time' : 'Check-In time'}</p>
                                            <p className='mb-0'>{FlightTime}</p>
                                        </div>
                                    </Col>
                                    {
                                        !timeZone &&
                                        <Col className='d-flex align-items-center gap-2'>
                                            <div className='bg-light_blue fa_ticket-icons text-orange d-flex justify-content-center align-items-center fa_aspect_ratio-1'>
                                                <AiFillClockCircle />
                                            </div>
                                            <div className='fa_ticket-detailes'>
                                                <p>Check-Out time</p>
                                                <p className='mb-0'>{checkOut}</p>
                                            </div>
                                        </Col>
                                    }
                                    <Col className='d-flex align-items-center gap-2'>
                                        <div className='bg-light_blue fa_ticket-icons text-orange d-flex justify-content-center align-items-center fa_aspect_ratio-1'>
                                            <BsFillDoorClosedFill />
                                        </div>
                                        <div className='fa_ticket-detailes'>
                                            <p>{timeZone ? 'Gate' : 'Room no.'}</p>
                                            <p className='mb-0'>{Gate}</p>
                                        </div>
                                    </Col>
                                    {
                                        timeZone &&
                                        <Col className='d-flex align-items-center gap-2'>
                                            <div className='bg-light_blue fa_ticket-icons text-orange d-flex justify-content-center align-items-center fa_aspect_ratio-1'>
                                                <MdAirlineSeatReclineExtra />
                                            </div>
                                            <div className='fa_ticket-detailes'>
                                                <p>Seat</p>
                                                <p className='mb-0'>{Seat}</p>
                                            </div>
                                        </Col>
                                    }
                                </Row>
                            </div>
                            <div className='flex-grow-1 p-4 d-flex justify-content-between'>
                                <div className='align-self-center fa_ticket-unique'>
                                    <p className='mb-0'>EK</p>
                                    <p className='mb-0'>ABC12345</p>
                                </div>
                                <div className='align-self-end fa_barCode'></div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} className='bg-white rounded-4 shadow-sm d-flex justify-content-center align-items-center px-0'>
                    <img src={timeZone ? FrameTicket : hotel} alt="FrameTicket" className={timeZone ? 'w-100' : 'w-50'} />
                </Col>
            </Row>
        </Container>
    )
}

export default Ticket
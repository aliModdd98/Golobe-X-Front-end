import './BookedDetailes.css'
import img from './../../assets/emiratesLogo.png'
import { GoDash } from "react-icons/go";
import { IoChevronForwardSharp } from "react-icons/io5";
import { BsFillCalendarEventFill, BsFillDoorClosedFill } from 'react-icons/bs'
import { AiFillClockCircle } from 'react-icons/ai'
import { MdAirlineSeatReclineExtra } from 'react-icons/md'




function BookedDetailes({ data, flight }) {
    return (
        <div className='my-3 bg-white rounded-3 shadow-sm px-3 py-4 d-flex align-items-center'>
            <div className='flex-grow-1 d-flex align-items-center'>
                <div className='fa_booked-tickets me-4 border-orange rounded-2 d-flex justify-content-center align-items-center p-1'>
                    <img src={data.img} alt="logo" className='w-100' />
                </div>
                <div className='d-flex align-items-center gap-2 pe-3 me-3 border-end border-secondary-subtle'>
                    <div>
                        <p className='mb-0 fa_from opacity-75'>{flight ? 'Newark(EWR)' : 'Check-In'}</p>
                        <p className='mb-0 fa_from-val'>{data.from}</p>
                    </div>
                    <GoDash className='fs-3' />
                    <div>
                        <p className='mb-0 fa_from opacity-75'>{flight ? 'Newark(EWR)' : 'Check-Out'}</p>
                        <p className='mb-0 fa_from-val'>{data.to}</p>
                    </div>
                </div>
                <div className='d-flex gap-3'>
                    <div>
                        <div className='d-flex align-items-center gap-2'>
                            <div className='fa_booking_ticket-icons d-flex justify-content-center align-items-center rounded-2'>
                                {flight ? <BsFillCalendarEventFill className='color-calender' /> : <AiFillClockCircle className='text-orange fs-5' />}
                            </div>
                            <div>
                                <p className='mb-0 fa_booking_ticket-icons-title'>{flight ? 'Date' : 'Check-In time'}</p>
                                <p className='mb-0 fa_booking_ticket-icons-value'>{data.date}</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <div className='fa_booking_ticket-icons d-flex justify-content-center align-items-center rounded-2'>
                                <AiFillClockCircle className='text-orange fs-5' />
                            </div>
                            <div>
                                <p className='mb-0 fa_booking_ticket-icons-title'>{flight ? 'Date' : 'Check-In out'}</p>
                                <p className='mb-0 fa_booking_ticket-icons-value'>{data.Flight_time}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='d-flex align-items-center gap-2'>
                            <div className='fa_booking_ticket-icons d-flex justify-content-center align-items-center rounded-2'>
                                <BsFillDoorClosedFill className='text-orange fs-5' />
                            </div>
                            <div>
                                <p className='mb-0 fa_booking_ticket-icons-title'>{flight ? 'Gate' : 'Room no.'}</p>
                                <p className='mb-0 fa_booking_ticket-icons-value'>{data.gate}</p>
                            </div>
                        </div>
                        {
                            flight && <div className='d-flex align-items-center gap-2'>
                                <div className='fa_booking_ticket-icons d-flex justify-content-center align-items-center rounded-2'>
                                    <MdAirlineSeatReclineExtra className='text-orange fs-5' />
                                </div>
                                <div>
                                    <p className='mb-0 fa_booking_ticket-icons-title'>Seat no.</p>
                                    <p className='mb-0 fa_booking_ticket-icons-value'>{data.Seat_no}</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className='d-flex gap-3'>
                <button className='border-0 bg-orange rounded-1 py-2 px-3'>
                    Download Ticket
                </button>
                <button className='border-orange bg-transparent fa_caveron-right'>
                    <IoChevronForwardSharp />
                </button>
            </div>
        </div>
    )
}

export default BookedDetailes
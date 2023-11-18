import './FlightDetailsCard.css'
import img from './../../assets/emirateslogo.png'
import { FaPlane } from 'react-icons/fa'
import { AiFillClockCircle, AiOutlineWifi } from 'react-icons/ai'
import { IoFastFood } from 'react-icons/io5'
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md'
import line from './../../assets/Line 5.svg'

function FlightDetailsCard({ date, flightDuration, leavingTime, landingTime, company, price }) {
    return (
        <div className='bg-white rounded-4 mb-5 px-3 py-4 shadow-sm'>
            {
                price && <div className='d-flex align-items-center justify-content-between mb-3'>
                    <h1 className='mb-0 fa_comapny_name-header'>Emirates A380 Airbus</h1>
                    <p className='mb-0 fa_price'>204 $</p>
                </div>
            }
            <div className='d-flex align-items-center justify-content-between'>
                <p className='mb-0 fa_flight-date'>{date}</p>
                <p className='mb-0 fa_flight-time_launch opacity-75'>{flightDuration}</p>
            </div>
            <div className='d-flex align-items-center justify-content-between mt-3 '>
                <div className='px-4 py-2 border-orange d-flex align-items-center rounded-2'>
                    <img src={img} alt="emirates logo" className='fa_flightDetailes-card_img' />
                    <div className='ms-4'>
                        <h2>{company}</h2>
                        <p className='mb-0'>Airbus A320</p>
                    </div>
                </div>
                <div className='d-flex align-items-center gap-3'>
                    <FaPlane className='fs-4' />
                    <div className='fa_flightDetailes-card_line'></div>
                    <AiOutlineWifi className='fs-4' />
                    <div className='fa_flightDetailes-card_line'></div>
                    <AiFillClockCircle className='fs-4' />
                    <div className='fa_flightDetailes-card_line'></div>
                    <IoFastFood className='fs-4' />
                    <div className='fa_flightDetailes-card_line'></div>
                    <MdOutlineAirlineSeatReclineExtra className='fs-4' />
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <p className='mb-0 fa_flight-time'>{leavingTime}</p>
                <p className='mb-0 ms-3 me-5 fa_flight-location'>Newark(EWR)</p>
                <img src={line} alt="line" />
                <FaPlane className='fs-1 mx-4' />
                <img src={line} alt="line" className='fa_rotate' />
                <p className='mb-0 ms-5 fa_flight-time'>{landingTime}</p>
                <p className='mb-0 ms-3 fa_flight-location'>Newark(EWR)</p>
            </div>
        </div>
    )
}

export default FlightDetailsCard
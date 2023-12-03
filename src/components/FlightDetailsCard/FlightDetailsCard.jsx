import './FlightDetailsCard.css'
import img from './../../assets/emirateslogo.png'
import { FaPlane } from 'react-icons/fa'
import { AiFillClockCircle, AiOutlineWifi } from 'react-icons/ai'
import { IoFastFood } from 'react-icons/io5'
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md'
import { PiBuildingsFill } from "react-icons/pi";
import line from './../../assets/Line 5.svg'
import { FaLocationDot } from 'react-icons/fa6'

function FlightDetailsCard({ flight, date, flightDuration, leavingTime, landingTime, company, price, title, location, timeZone }) {
    return (
        <div className='bg-white rounded-4 mb-5 px-3 py-4 shadow-sm'>
            {
                price &&
                <div className='d-flex align-items-center justify-content-between mb-3'>
                    <h1 className='mb-0 fa_comapny_name-header'>{title}</h1>
                    <p className='mb-0 fa_price'>{price} $ {!flight && <span className='fs-5'>/night</span>}</p>
                </div>
            }
            {
                flight &&
                <div className='d-flex align-items-center justify-content-between'>
                    <p className='mb-0 fa_flight-date'>{date}</p>
                    <p className='mb-0 fa_flight-time_launch opacity-75'>{flightDuration}</p>
                </div>
            }
            <div className='d-flex align-items-center justify-content-between mt-3 '>
                <div className={`px-4 py-2 border-orange d-flex align-items-center rounded-2 ${flight ? '' : 'flex-grow-1'}`}>
                    <img src={img} alt="emirates logo" className='fa_flightDetailes-card_img' />
                    <div className='ms-4'>
                        <p className='fa_company-name'>{company}</p>
                        <p className='mb-0 d-flex justify-centent-center align-items-center'>
                            {!flight && <FaLocationDot className='me-2' />}
                            {location}
                        </p>
                    </div>
                </div>
                {
                    flight &&
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
                }
            </div>
            <div className={`d-flex justify-content-${flight? 'center': 'between'} align-items-center mt-5 gap-5`}>
                <div className={flight ? 'd-flex align-items-center gap-3' : 'd-flex flex-column gap-2'}>
                    <p className='mb-0 fa_flight-time'>{leavingTime}</p>
                    <p className='mb-0 fa_flight-location'>{flight? timeZone : 'check in'}</p>
                </div>
                <div>
                    <img src={line} alt="line" />
                    {
                        flight ? <FaPlane className='fs-1 mx-4' /> : <PiBuildingsFill className='fs-1 mx-4' />
                    }
                    <img src={line} alt="line" className='fa_rotate' />
                </div>
                <div className={flight ? 'd-flex align-items-center gap-3' : 'd-flex flex-column gap-2'}>
                    <p className='mb-0 fa_flight-time'>{landingTime}</p>
                    <p className='mb-0 fa_flight-location'>{flight? timeZone : 'check out'}</p>
                </div>
            </div>
        </div>
    )
}

export default FlightDetailsCard
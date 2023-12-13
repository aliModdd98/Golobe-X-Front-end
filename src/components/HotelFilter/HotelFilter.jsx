import'./HotelFilter.css'
import { IoBed } from 'react-icons/io5'
import { BsFillCalendarWeekFill } from 'react-icons/bs'
import { BiSolidUser } from 'react-icons/bi'
import { AiOutlineDown } from 'react-icons/ai'
import { useState } from 'react'

function HotelFilter() {
    const [dropValue, setDropValue] = useState('Return')
    const [show, setShow] = useState(false)
    return (
        <>
            <div className='fa_Destination-input px-2 '>
                <div className='position-relative d-flex border border-secondary rounded-2 px-2 py-3'>
                    <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                        Enter Destination
                    </label>
                    <span><IoBed className='fs-4 me-2' /></span>
                    <input type="text" className='input_searchFormfa_outline-none border-0 flex-grow-1' placeholder='Istanbul, Turkey' />
                </div>
            </div>
            <div className='fa_other-inputs px-2 '>
                <div className='position-relative d-flex border border-secondary rounded-2 px-2 py-3' onClick={() => {setShow(!show)}}>
                    <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                        Check Out
                    </label>
                    <span><BiSolidUser className='fs-4 me-2' /></span>
                    <p className='mb-0 flex-grow-1 opacity-75 fa_return-value d-flex align-items-center'>
                        {dropValue}
                    </p>
                    <AiOutlineDown className='fs-4' />
                    <div className={`rounded-3 shadow-sm position-absolute p-3 fa_transition top-100 w-100 start-50 translate-middle-x ${show ? 'd-block' : 'd-none'}`}>
                        <p className='mb-3' onClick={() => { setDropValue('Return') }}>Return</p>
                        <p className='mb-0' onClick={() => { setDropValue('Go') }}>Go</p>
                    </div>
                </div>
            </div>
            <div className='fa_other-inputs px-2 '>
                <div className='position-relative d-flex border border-secondary rounded-2 px-2 py-3'>
                    <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                        Check In
                    </label>
                    <input type="text" className='input_searchForm fa_outline-none border-0 flex-grow-1' placeholder='Fri 12/2' />
                    <span><BsFillCalendarWeekFill className='fs-4 me-2' /></span>
                </div>
            </div>
            <div className='fa_other-inputs px-2 '>
                <div className='position-relative d-flex border border-secondary rounded-2 px-2 py-3'>
                    <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                        Check Out
                    </label>
                    <input type="text" className='input_searchForm fa_outline-none border-0 flex-grow-1' placeholder='Sun 12/4' />
                    <span><BsFillCalendarWeekFill className='fs-4 me-2' /></span>
                </div>
            </div>
        </>
    )
}

export default HotelFilter
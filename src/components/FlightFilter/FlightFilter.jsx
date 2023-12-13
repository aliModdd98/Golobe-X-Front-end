import './FlightFilter.css'
import { GoArrowSwitch } from 'react-icons/go'
import { AiOutlineDown } from 'react-icons/ai'
import { useState } from 'react'

function FlightFilter() {
    const [show, setShow] = useState(false)
    const [dropValue, setDropValue] = useState('Return')

    return (
        <>
            <div className='fa_fromTo-input px-2'>
                <div className='position-relative d-flex border border-secondary rounded-2 px-2 py-3'>
                    <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                        From - To
                    </label>
                    <input type="text" className='input_searchForm fa_outline-none border-0 flex-grow-1' placeholder='Lahore - Karachi' />
                    <span><GoArrowSwitch className='fs-4' /></span>
                </div>
            </div>
            <div className='fa_Trip-input px-2'>
                <div className='position-relative border border-secondary rounded-2 px-2 py-3' onClick={() => setShow(!show)}>
                    <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                        Trip
                    </label>
                    <p className='mb-0 d-flex align-items-center justify-content-between fa_return-value'>
                        {dropValue}
                        <AiOutlineDown className='fs-4' />
                    </p>
                    <div className={`opacity-100 rounded-3 shadow-sm bg-white position-absolute p-3 fa_transition top-100 w-100 start-50 translate-middle-x ${show ? 'd-block' : 'd-none'}`}>
                        <p className='mb-3' onClick={() => { setDropValue('Return') }}>Return</p>
                        <p className='mb-0' onClick={() => { setDropValue('Go') }}>Go</p>
                    </div>
                </div>
            </div>
            <div className='fa_fromTo-input px-2'>
                <div className='position-relative border border-secondary rounded-2 px-2 py-3'>
                    <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                        Depart- Return
                    </label>
                    <input type="text" className='input_searchForm fa_outline-none border-0 w-100' placeholder='07 Nov 22 - 13 Nov 22' />
                </div>
            </div>
            <div className='fa_fromTo-input px-2'>
                <div className='position-relative border border-secondary rounded-2 px-2 py-3'>
                    <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                        Passenger - Class
                    </label>
                    <input type="text" className='input_searchForm fa_outline-none border-0 w-100' placeholder='1 Passenger, Economy' />
                </div>
            </div>
        </>
    )
}

export default FlightFilter
import React from 'react'
import { Container } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'
import FlightFilter from '../FlightFilter/FlightFilter'
import './SearchFormSmall.css'
import HotelFilter from '../HotelFilter/HotelFilter'

function SearchFormSmall({flight}) {
    return (
        <Container>
            <div className='pb-5'></div>
            <div className='pt-5 mt-5'>
                <form className='px-3 py-4 bg-white rounded-3 shadow-sm d-flex'>
                    <div className='flex-grow-1'>
                        <div className='d-flex'>
                            {
                                (flight)
                                ? <FlightFilter />
                                : <HotelFilter />
                            }
                        </div>
                    </div>
                    <button className='d-flex border-0 justify-content-center align-items-center bg-orange p-3 ms-3 aspect_ratio-1'>
                        <AiOutlineSearch className='fs-3' />
                    </button>
                </form>
            </div>
        </Container>
    )
}

export default SearchFormSmall